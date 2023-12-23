package com.yupi.maker.template.model;

import com.yupi.maker.meta.Meta;
import lombok.Data;

/**
 * 模板制作配置
 */
@Data
public class TemplateMakerConfig {

    private Long id;

    private Meta meta = new Meta();

    private String originProjectPath;

    TemplateMakerFileConfig fileConfig = new TemplateMakerFileConfig();

    TemplateMakerModelConfig modelConfig = new TemplateMakerModelConfig();

    TemplateMakerOutputConfig outputConfig = new TemplateMakerOutputConfig();
}
