import React from 'react';
import { Button, Tag, Space } from 'antd';
import ProList from '@ant-design/pro-list';
import request from 'umi-request';

interface GithubIssueItem {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
}

export default () => (
  <ProList<GithubIssueItem>
    toolBarRender={() => {
      return [
        <Button key="3" type="primary">
          新建
        </Button>,
      ];
    }}
    search={{
      filterType: 'light',
    }}
    rowKey="name"
    headerTitle="基础列表"
    request={async (params = {}) =>
      request<{
        data: GithubIssueItem[];
      }>('https://proapi.azurewebsites.net/github/issues', {
        params,
      })
    }
    pagination={{
      pageSize: 5,
    }}
    showActions="hover"
    metas={{
      title: {
        dataIndex: ['user', 'login'],
        title: '用户',
      },
      avatar: {
        dataIndex: ['user', 'avatar_url'],
        search: false,
      },
      description: {
        dataIndex: 'title',
        search: false,
      },
      subTitle: {
        dataIndex: 'labels',
        render: (_, row) => {
          return (
            <Space size={0}>
              {row.labels?.map((label: { name: string }) => (
                <Tag color="blue">{label.name}</Tag>
              ))}
            </Space>
          );
        },
        search: false,
      },
      actions: {
        render: (text, row) => [
          <a href={row.url} target="_blank" rel="noopener noreferrer" key="link">
            链路
          </a>,
          <a href={row.url} target="_blank" rel="noopener noreferrer" key="warning">
            报警
          </a>,
          <a href={row.url} target="_blank" rel="noopener noreferrer" key="view">
            查看
          </a>,
        ],
        search: false,
      },
      status: {
        // 自己扩展的字段，主要用于筛选，不在列表中显示
        title: '状态',
        valueEnum: {
          all: { text: '全部', status: 'Default' },
          open: {
            text: '未解决',
            status: 'Error',
          },
          closed: {
            text: '已解决',
            status: 'Success',
          },
          processing: {
            text: '解决中',
            status: 'Processing',
          },
        },
      },
    }}
  />
);
