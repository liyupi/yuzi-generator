package com.yupi.web.model.dto.generator;

import com.yupi.maker.meta.Meta;
import lombok.Data;

import java.io.Serializable;

/**
 * 制作代码生成器请求
 *
 * @author <a href="https://github.com/liyupi">程序员鱼皮</a>
 * @from <a href="https://yupi.icu">编程导航知识星球</a>
 */
@Data
public class GeneratorMakeRequest implements Serializable {

    /**
     * 元信息
     */
    private Meta meta;

    /**
     * 模板文件压缩包路径
     */
    private String zipFilePath;

    private static final long serialVersionUID = 1L;
}