package com.yupi.maker.template.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
public class TemplateMakerFileConfig {

    private List<FileInfoConfig> files;

    private FileGroupConfig fileGroupConfig;

    @NoArgsConstructor
    @Data
    public static class FileInfoConfig {

        private String path;

        private String condition;

        private List<FileFilterConfig> filterConfigList;
    }

    @Data
    public static class FileGroupConfig {

        private String condition;

        private String groupKey;

        private String groupName;
    }
}
