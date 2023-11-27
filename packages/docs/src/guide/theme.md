# 主题设置

```css
:root {
  --go-color-white: #ffffff;
  --go-color-black: #000000;
  --go-color-primary: #409eff;
  --go-color-primary-light-1: #53a8ff;
  --go-color-primary-light-2: #66b1ff;
  --go-color-primary-light-3: #79bbff;
  --go-color-primary-light-4: #8cc5ff;
  --go-color-primary-light-5: #a0cfff;
  --go-color-primary-light-6: #b3d8ff;
  --go-color-primary-light-7: #c6e2ff;
  --go-color-primary-light-8: #d9ecff;
  --go-color-primary-light-9: #ecf5ff;
  --go-color-primary-dart-2: #337ecc;
  --go-color-success: #67c23a;
  --go-color-success-light-1: #76c84e;
  --go-color-success-light-2: #85ce61;
  --go-color-success-light-3: #95d475;
  --go-color-success-light-4: #a4da89;
  --go-color-success-light-5: #b3e19d;
  --go-color-success-light-6: #c2e7b0;
  --go-color-success-light-7: #d1edc4;
  --go-color-success-light-8: #e1f3d8;
  --go-color-success-light-9: #f0f9eb;
  --go-color-success-dart-2: #529b2e;
  --go-color-warning: #e6a23c;
  --go-color-warning-light-1: #e9ab50;
  --go-color-warning-light-2: #ebb563;
  --go-color-warning-light-3: #eebe77;
  --go-color-warning-light-4: #f0c78a;
  --go-color-warning-light-5: #f3d19e;
  --go-color-warning-light-6: #f5dab1;
  --go-color-warning-light-7: #f8e3c5;
  --go-color-warning-light-8: #faecd8;
  --go-color-warning-light-9: #fdf6ec;
  --go-color-warning-dart-2: #b88230;
  --go-color-danger: #f56c6c;
  --go-color-danger-light-1: #f67b7b;
  --go-color-danger-light-2: #f78989;
  --go-color-danger-light-3: #f89898;
  --go-color-danger-light-4: #f9a7a7;
  --go-color-danger-light-5: #fab6b6;
  --go-color-danger-light-6: #fbc4c4;
  --go-color-danger-light-7: #fcd3d3;
  --go-color-danger-light-8: #fde2e2;
  --go-color-danger-light-9: #fef0f0;
  --go-color-danger-dart-2: #c45656;
  --go-color-error: #f56c6c;
  --go-color-error-light-1: #f67b7b;
  --go-color-error-light-2: #f78989;
  --go-color-error-light-3: #f89898;
  --go-color-error-light-4: #f9a7a7;
  --go-color-error-light-5: #fab6b6;
  --go-color-error-light-6: #fbc4c4;
  --go-color-error-light-7: #fcd3d3;
  --go-color-error-light-8: #fde2e2;
  --go-color-error-light-9: #fef0f0;
  --go-color-error-dart-2: #c45656;
  --go-color-info: #909399;
  --go-color-info-light-1: #9b9ea3;
  --go-color-info-light-2: #a6a9ad;
  --go-color-info-light-3: #b1b3b8;
  --go-color-info-light-4: #bcbec2;
  --go-color-info-light-5: #c8c9cc;
  --go-color-info-light-6: #d3d4d6;
  --go-color-info-light-7: #dedfe0;
  --go-color-info-light-8: #e9e9eb;
  --go-color-info-light-9: #f4f4f5;
  --go-color-info-dart-2: #73767a;
  --go-text-color-primary: #303133;
  --go-text-color-regular: #606266;
  --go-text-color-secondary: #909399;
  --go-text-color-placeholder: #a8abb2;
  --go-text-color-disabled: #c0c4cc;
  --go-fill-color: #f0f2f5;
  --go-fill-color-light: #f5f7fa;
  --go-fill-color-lighter: #fafafa;
  --go-fill-color-extra-light: #fafcff;
  --go-border-color: #dcdfe6;
  --go-border-color-light: #e4e7ed;
  --go-border-color-lighter: #ebeef5;
  --go-border-color-extra-light: #f2f6fc;
  --go-shadow: 0px 12px 32px 4px rgba(0, 0, 0, 0.04), 0px 8px 20px rgba(0, 0, 0, 0.08);
  --go-box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, 0.04), 0px 8px 20px rgba(0, 0, 0, 0.08);
  --go-box-shadow-light: 0px 0px 12px rgba(0, 0, 0, 0.12);
  --go-box-shadow-lighter: 0px 0px 6px rgba(0, 0, 0, 0.12);
  --go-box-shadow-dark: 0px 16px 48px 16px rgba(0, 0, 0, 0.08), 0px 12px 32px
      rgba(0, 0, 0, 0.12), 0px 8px 16px -8px rgba(0, 0, 0, 0.16);
  --go-font-size: 14px;
  --go-font-size-small: 12px;
  --go-timeline-node-size: 12px;
  --go-timeline-node-size-large: 14px;
  --go-border-radius: 4px;
  --go-border-radius-medium: 8px;
  --go-all-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  --go-fade-transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  --go-fade-linear-transition: opacity 0.2s linear;
  --go-md-fade-transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1) opacity
    0.3s cubic-bezier(0.23, 1, 0.32, 1);
  --go-border-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  --go-color-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
```
