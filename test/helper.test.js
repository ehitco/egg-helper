'use strict';
// import fs from 'fs';
// import path from 'path';
const assert = require('assert');
const mock = require('egg-mock');

describe('test/helper.test.js', () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });
  // test Int
  it('isInt', () => {
    const ctx = app.mockContext();
    assert(ctx.helper.isInt(11));
  });
  it('isInt1', () => {
    const ctx = app.mockContext();
    assert(!ctx.helper.isInt('11'));
  });
  it('isInt2', () => {
    const ctx = app.mockContext();
    assert(ctx.helper.isInt(4e2));
  });

  it('isInt3', () => {
    const ctx = app.mockContext();
    assert(!ctx.helper.isInt('4e2'));
  });

  it('isInt4', () => {
    const ctx = app.mockContext();
    assert(!ctx.helper.isInt(' 1 '));
  });

  it('isInt5', () => {
    const ctx = app.mockContext();
    assert(!ctx.helper.isInt(''));
  });

  it('isInt6', () => {
    const ctx = app.mockContext();
    assert(!ctx.helper.isInt(' '));
  });

  it('isInt7', () => {
    const ctx = app.mockContext();
    assert(!ctx.helper.isInt('1a'));
  });

  it('isInt8', () => {
    const ctx = app.mockContext();
    assert(!ctx.helper.isInt('42e2a'));
  });

  it('isInt9', () => {
    const ctx = app.mockContext();
    assert(!ctx.helper.isInt(null));
  });

  it('isInt10', () => {
    const ctx = app.mockContext();
    assert(!ctx.helper.isInt(undefined));
  });

  it('isInt11', () => {
    const ctx = app.mockContext();
    assert(!ctx.helper.isInt(NaN));
  });

  it('isInt12', () => {
    const ctx = app.mockContext();
    assert(!ctx.helper.isInt(42.1));
  });

  it('isExist', () => {
    const ctx = app.mockContext();
    assert(!ctx.helper.isExist('/www/fasdfasfasdfa'));
  });

  it('isExist 2', () => {
    const ctx = app.mockContext();
    assert(ctx.helper.isExist(__filename));
  });

  it('isExist 3', () => {
    const ctx = app.mockContext();
    assert(ctx.helper.isExist(__dirname));
  });

  it('isExist 4', () => {
    const ctx = app.mockContext();
    assert(!ctx.helper.isExist('/root'));
  });

  it('isFile', () => {
    const ctx = app.mockContext();
    assert(!ctx.helper.isFile('/root'));
  });

  it('isFile 2', () => {
    const ctx = app.mockContext();
    assert(ctx.helper.isFile(__filename));
  });

  it('isDirectory', () => {
    const ctx = app.mockContext();
    assert(!ctx.helper.isDirectory(__filename));
  });

  it('isDirectory 2', () => {
    const ctx = app.mockContext();
    assert(ctx.helper.isDirectory(__dirname));
  });
});
