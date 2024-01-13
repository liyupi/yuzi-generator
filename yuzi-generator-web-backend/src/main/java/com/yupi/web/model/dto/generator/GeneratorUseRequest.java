package com.yupi.web.model.dto.generator;

import lombok.Data;

import java.io.Serializable;
import java.util.Map;

/**
 * 使用代码生成器请求
 *
 * @author <a href="https://github.com/liyupi">程序员鱼皮</a>
 * @from <a href="https://yupi.icu">编程导航知识星球</a>
 */
@Data
public class GeneratorUseRequest implements Serializable {

    /**
     * 生成器的 id
     */
    private Long id;

    /**
     * 数据模型
     */
    private Map<String, Object> dataModel;

    private static final long serialVersionUID = 1L;
}