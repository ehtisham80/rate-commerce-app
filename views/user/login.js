<% layout('layout') %>

<div class="container">
    <br><br>
    <div class="text-center reg_msg">
        <h1><a href="/">RateBusiness</a></h1>
    </div>
<br><br>

<div class="col-md-offset-4">
        <a href="/auth/facebook" class="btn btn-block btn-social btn-facebook btn-lg">
            <i class="fa fa-facebook"></i> Login with Facebook
        </a>
    </div><br>


<div class="text-center reg_msg">
        <h2 class="fancy"><span>Login</span></h2>
</div><br>

    <div class="row signup">
        
        <% if(hasErrors) {%>
            <% for(var i = 0; i < messages.length; i++) {%>
                <div class="alert alert-danger">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">
                    &times;
                </a>
                <%= messages[i] %>
                    
                </div>
            <% } %>
        <% } %>

        <form method="POST" action="/login">

            <div class="form-group input_group">
                <input id="email" class="form-control" name="email" type="text" autocomplete="on" placeholder="EMAIL" style="margin-bottom:20px;">
            </div>

            <div class="form-group input_group">
                <input id="password" class="form-control" name="password" type="password" placeholder="PASSWORD" style="margin-bottom:20px;">
            </div>


            <div class="form-group">
                <input type="submit" id="login" value="LOGIN" class="form-control btn btn-primary" name="login" style="">
            </div>
            
            <div class="form-group">
                <label for="">
                    <input type="checkbox" name="rememberme" class="" value="yes">
                </label>&nbsp;&nbsp;Remember Me
            </div>

        </form>

        <div>
            <h4 class="pull-left">Don't have an account? <a href="/signup">Sign Up</a></h4>
            <h4 class="pull-right"><a href="/forgot">Forgot Your Password?</a></h4>
        </div>
    </div>
</div>
