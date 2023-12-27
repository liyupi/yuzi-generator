declare namespace API {
  type BaseResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseGeneratorVO = {
    code?: number;
    data?: GeneratorVO;
    message?: string;
  };

  type BaseResponseLoginUserVO = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponsePageGenerator = {
    code?: number;
    data?: PageGenerator;
    message?: string;
  };

  type BaseResponsePageGeneratorVO = {
    code?: number;
    data?: PageGeneratorVO;
    message?: string;
  };

  type BaseResponsePageUser = {
    code?: number;
    data?: PageUser;
    message?: string;
  };

  type BaseResponsePageUserVO = {
    code?: number;
    data?: PageUserVO;
    message?: string;
  };

  type BaseResponseString = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseUser = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: string;
  };

  type FileConfig = {
    inputRootPath?: string;
    outputRootPath?: string;
    sourceRootPath?: string;
    type?: string;
    files?: FileInfo[];
  };

  type FileInfo = {
    inputPath?: string;
    outputPath?: string;
    type?: string;
    generateType?: string;
    condition?: string;
    groupKey?: string;
    groupName?: string;
  };

  type Generator = {
    id?: string;
    name?: string;
    description?: string;
    basePackage?: string;
    version?: string;
    author?: string;
    tags?: string;
    picture?: string;
    fileConfig?: string;
    modelConfig?: string;
    distPath?: string;
    status?: number;
    userId?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type GeneratorAddRequest = {
    name?: string;
    description?: string;
    basePackage?: string;
    version?: string;
    author?: string;
    tags?: string[];
    picture?: string;
    fileConfig?: FileConfig;
    modelConfig?: ModelConfig;
    distPath?: string;
    status?: number;
  };

  type GeneratorEditRequest = {
    id?: string;
    name?: string;
    description?: string;
    basePackage?: string;
    version?: string;
    author?: string;
    tags?: string[];
    picture?: string;
    fileConfig?: FileConfig;
    modelConfig?: ModelConfig;
    distPath?: string;
  };

  type GeneratorQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: string;
    notId?: string;
    searchText?: string;
    tags?: string[];
    orTags?: string[];
    userId?: string;
    name?: string;
    description?: string;
    basePackage?: string;
    version?: string;
    author?: string;
    distPath?: string;
    status?: number;
  };

  type GeneratorUpdateRequest = {
    id?: string;
    name?: string;
    description?: string;
    basePackage?: string;
    version?: string;
    author?: string;
    tags?: string[];
    picture?: string;
    fileConfig?: FileConfig;
    modelConfig?: ModelConfig;
    distPath?: string;
    status?: number;
  };

  type GeneratorVO = {
    id?: string;
    name?: string;
    description?: string;
    basePackage?: string;
    version?: string;
    author?: string;
    tags?: string[];
    picture?: string;
    fileConfig?: FileConfig;
    modelConfig?: ModelConfig;
    distPath?: string;
    status?: number;
    userId?: string;
    createTime?: string;
    updateTime?: string;
    user?: UserVO;
  };

  type getGeneratorVOByIdParams = {
    id: string;
  };

  type getUserByIdParams = {
    id: string;
  };

  type getUserVOByIdParams = {
    id: string;
  };

  type LoginUserVO = {
    id?: string;
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    createTime?: string;
    updateTime?: string;
  };

  type ModelConfig = {
    models?: ModelInfo[];
  };

  type ModelInfo = {
    fieldName?: string;
    type?: string;
    description?: string;
    defaultValue?: Record<string, any>;
    abbr?: string;
    groupKey?: string;
    groupName?: string;
    condition?: string;
    allArgsStr?: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageGenerator = {
    records?: Generator[];
    total?: string;
    size?: string;
    current?: string;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    countId?: string;
    maxLimit?: string;
    pages?: string;
  };

  type PageGeneratorVO = {
    records?: GeneratorVO[];
    total?: string;
    size?: string;
    current?: string;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    countId?: string;
    maxLimit?: string;
    pages?: string;
  };

  type PageUser = {
    records?: User[];
    total?: string;
    size?: string;
    current?: string;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    countId?: string;
    maxLimit?: string;
    pages?: string;
  };

  type PageUserVO = {
    records?: UserVO[];
    total?: string;
    size?: string;
    current?: string;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    countId?: string;
    maxLimit?: string;
    pages?: string;
  };

  type uploadFileParams = {
    uploadFileRequest: UploadFileRequest;
  };

  type UploadFileRequest = {
    biz?: string;
  };

  type User = {
    id?: string;
    userAccount?: string;
    userPassword?: string;
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type UserAddRequest = {
    userName?: string;
    userAccount?: string;
    userAvatar?: string;
    userRole?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
  };

  type UserUpdateMyRequest = {
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: string;
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    id?: string;
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    createTime?: string;
  };
}
