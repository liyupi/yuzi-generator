import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Form, FormListFieldData, Input, Space } from 'antd';

interface Props {
  formRef: any;
  oldData: any;
}

export default (props: Props) => {
  const { formRef, oldData } = props;

  /**
   * 单个表单字段填写视图
   * @param field
   * @param remove
   */
  const singleFieldFormView = (
    field: FormListFieldData,
    remove?: (index: number | number[]) => void,
  ) => (
    <Space>
      <Form.Item label="字段名称" name={[field.name, 'fieldName']}>
        <Input />
      </Form.Item>
      <Form.Item label="描述" name={[field.name, 'description']}>
        <Input />
      </Form.Item>
      <Form.Item label="类型" name={[field.name, 'type']}>
        <Input />
      </Form.Item>
      <Form.Item label="默认值" name={[field.name, 'defaultValue']}>
        <Input />
      </Form.Item>
      <Form.Item label="缩写" name={[field.name, 'abbr']}>
        <Input />
      </Form.Item>
      {remove && (
        <Button type="text" danger onClick={() => remove(field.name)}>
          删除
        </Button>
      )}
    </Space>
  );

  return (
    <Form.List name={['modelConfig', 'models']}>
      {(fields, { add, remove }) => (
        <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
          {fields.map((field) => {
            // 注意要获取到 groupKey，防止修改时识别分组错误
            const modelConfig =
              formRef?.current?.getFieldsValue()?.modelConfig ?? oldData?.modelConfig;
            const groupKey = modelConfig?.models?.[field.name]?.groupKey;

            return (
              <Card
                size="small"
                title={groupKey ? '分组' : '未分组字段'}
                key={field.key}
                extra={
                  <CloseOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                }
              >
                {groupKey ? (
                  <>
                    <Space>
                      <Form.Item label="分组key" name={[field.name, 'groupKey']}>
                        <Input />
                      </Form.Item>
                      <Form.Item label="组名" name={[field.name, 'groupName']}>
                        <Input />
                      </Form.Item>
                      <Form.Item label="类型" name={[field.name, 'type']}>
                        <Input />
                      </Form.Item>
                      <Form.Item label="条件" name={[field.name, 'condition']}>
                        <Input />
                      </Form.Item>
                    </Space>
                  </>
                ) : (
                  singleFieldFormView(field)
                )}

                {/* 组内字段 */}
                {groupKey && (
                  <Form.Item label="组内字段">
                    <Form.List name={[field.name, 'models']}>
                      {(subFields, subOpt) => (
                        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
                          {subFields.map((subField) => {
                            return singleFieldFormView(subField, subOpt.remove);
                          })}
                          <Button type="dashed" onClick={() => subOpt.add()}>
                            添加组内字段
                          </Button>
                        </div>
                      )}
                    </Form.List>
                  </Form.Item>
                )}
              </Card>
            );
          })}

          <Button type="dashed" onClick={() => add()}>
            添加字段
          </Button>
          <Button
            type="dashed"
            onClick={() =>
              add({
                groupName: '分组',
                groupKey: 'groupKey',
              })
            }
            block
          >
            添加分组
          </Button>
          <div style={{ marginBottom: 16 }} />
        </div>
      )}
    </Form.List>
  );
};
