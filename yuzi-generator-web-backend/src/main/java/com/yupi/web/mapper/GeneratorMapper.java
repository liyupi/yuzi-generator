package com.yupi.web.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yupi.web.model.entity.Generator;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * @author 李鱼皮
 * @description 针对表【generator(代码生成器)】的数据库操作Mapper
 * @createDate 2023-12-27 20:49:39
 * @Entity com.yupi.web.model.entity.Generator
 */
public interface GeneratorMapper extends BaseMapper<Generator> {
    @Select("SELECT id, distPath FROM generator WHERE isDelete = 1")
    List<Generator> listDeletedGenerator();
}




