<% layout('layout') %>

<div class="container">
    <br><br>
    <div class="text-center reg_msg">
        <h1><a href="/">RateBusiness</a></h1>
    </div>
    <br><br>
    <div class="banner-title text-center reg_msg">
        <h2 class="fancy"><span>Reset Password</span></h2>
    </div><br><br><br>

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
        
        <% if(noErrors) {%>
            <div class="alert alert-success">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">
                &times;
            </a>
            <%= success %>

            </div>
        <% } %>

        <form method="POST">
            <div class="form-group input_group">
                <input id="password" class="form-control" name="password" type="password" autocomplete="on" placeholder="PASSWORD" style="margin-bottom:20px;">
            </div>

            <div class="form-group input_group">
                <input id="cpassword" class="form-control" name="cpassword" type="password" autocomplete="on" placeholder="CONFIRM PASSWORD" style="margin-bottom:20px;">
            </div>

            <div class="form-group" id="submit">
                <input type="submit" value="Reset Password" class="form-control btn btn-primary" name="reset" style="">
            </div>
        </form>

        <div>
            <h4>Already reset your password? <a href="/login">Login</a></h4>
        </div>

    </div>
</div>
