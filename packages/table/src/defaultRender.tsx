import React from 'react';
import ProField, { ProFieldEmptyText, ProFieldValueType } from '@ant-design/pro-field';
import { ProSchemaComponentTypes } from '@ant-design/pro-utils';
import { ProColumnType } from './index';

const SHOW_EMPTY_TEXT_LIST = ['', null, undefined];

/**
 * 根据不同的类型来转化数值
 * @param text
 * @param valueType
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultRenderText = <T, U = any>(
  text: string | number | React.ReactText[],
  valueType: ProColumnType['valueType'],
  index: number,
  item?: T,
  columnEmptyText?: ProFieldEmptyText,
  props?: ProColumnType<T>,
  type?: ProSchemaComponentTypes,
): React.ReactNode => {
  // 如果 valueType === text ，没必要多走一次 render
  if ((!valueType || valueType === 'text') && !props?.valueEnum) {
    // 如果是''、null、undefined 显示columnEmptyText
    return SHOW_EMPTY_TEXT_LIST.includes(text as any) ? columnEmptyText : text;
  }

  if (typeof valueType === 'function' && item) {
    const value = valueType(item, type) || 'text';
    // 防止valueType是函数,并且text是''、null、undefined跳过显式设置的columnEmptyText
    return defaultRenderText(text, value as ProFieldValueType, index, item, columnEmptyText, props);
  }
  return (
    <ProField
      {...props}
      proFieldKey={props?.dataIndex?.toString() || props?.key}
      text={valueType === 'index' || valueType === 'indexBorder' ? index : text}
      mode="read"
      emptyText={columnEmptyText}
      render={undefined}
      renderFormItem={undefined}
      valueType={valueType as ProFieldValueType}
    />
  );
};

export default defaultRenderText;
