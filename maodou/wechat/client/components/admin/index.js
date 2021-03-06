import React from 'react';

export default (props) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <h4>微信配置</h4>
        <form onSubmit={props.saveWechatConfigs}>
          <div className="form-group">
            <label>AppId</label>
            <input type="text" name="appId" className="form-control" defaultValue={props.appId} />
          </div>
          <div className="form-group">
            <label>secretId</label>
            <input type="text" name="appSecret" className="form-control" defaultValue={props.appSecret} />
          </div>
          <button className="btn btn-success">提交</button>
        </form>
      </div>
    </div>
  </div>
);
