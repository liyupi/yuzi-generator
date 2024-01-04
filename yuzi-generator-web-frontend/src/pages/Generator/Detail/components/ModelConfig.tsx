import { FileOutlined } from '@ant-design/icons';
import { Descriptions, DescriptionsProps, Divider } from 'antd';
import React from 'react';

interface Props {
  data: API.GeneratorVO;
}

/**
 * 模型配置
 * @constructor
 */
const ModelConfig: React.FC<Props> = (props) => {
  const { data } = props;

  const modelConfig = data?.modelConfig;
  if (!modelConfig) {
    return <></>;
  }

  const modelListView = (models?: API.ModelInfo[]) => {
    if (!models) {
      return <></>;
    }

    return (
      <>
        {models.map((model, index) => {
          // 是分组
          if (model.groupKey) {
            const groupModelItems: DescriptionsProps['items'] = [
              {
                key: 'groupKey',
                label: '分组key',
                children: <p>{model.groupKey}</p>,
              },
              {
                key: 'groupName',
                label: '分组名',
                children: <p>{model.groupName}</p>,
              },
              {
                key: 'condition',
                label: '条件',
                children: <p>{model.condition}</p>,
              },
              {
                key: 'models',
                label: '组内模型',
                children: <p>{modelListView(model.models)}</p>,
              },
            ];

            return (
              <Descriptions
                key={index}
                column={1}
                title={model.groupName}
                items={groupModelItems}
              />
            );
          }

          const modelItems: DescriptionsProps['items'] = [
            {
              key: 'fieldName',
              label: '字段名称',
              children: <p>{model.fieldName}</p>,
            },
            {
              key: 'type',
              label: '类型',
              children: <p>{model.type}</p>,
            },
            {
              key: 'description',
              label: '描述',
              children: <p>{model.description}</p>,
            },
            {
              key: 'defaultValue',
              label: '默认值',
              children: <p>{model.defaultValue as any}</p>,
            },
            {
              key: 'abbr',
              label: '缩写',
              children: <p>{model.abbr}</p>,
            },
            {
              key: 'condition',
              label: '条件',
              children: <p>{model.condition}</p>,
            },
          ];

          return (
            <>
              <Descriptions column={2} key={index} items={modelItems} />
              <Divider />
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <Descriptions
        title={
          <>
            <FileOutlined /> 模型列表
          </>
        }
      />
      {modelListView(modelConfig.models)}
    </div>
  );
};

export default ModelConfig;
