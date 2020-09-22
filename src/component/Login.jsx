import React, { Component } from 'react';




class Login extends Component {
    render() { 
        return (
            <div className="h-100 bg-success">
                    <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-sm-8 col-lg-5">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title mb-0">Login</h3>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <label class="sr-only">Username</label>
                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text"><i class="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" className="form-control" name="userName" placeholder="Username"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="sr-only">Password</label>
                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text"><i class="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control" name="passWord" placeholder="Password"/>
                                    </div>
                                </div>
                                <button type="button" class="mt-4 btn btn-primary btn-lg btn-block">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        
        
         );
    }
}
 
export default Login;