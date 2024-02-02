package com.yupi.web.manager;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;
import java.util.Arrays;

@SpringBootTest
class CosManagerTest {

    @Resource
    private CosManager cosManager;

    @Test
    void deleteObject() {
        cosManager.deleteObject("/test/logo.png");
    }

    @Test
    void deleteObjects() {
        cosManager.deleteObjects(Arrays.asList("test/test1.png", "test/test2.png"));
    }

    @Test
    void deleteDir() {
        cosManager.deleteDir("/test/");
    }
}