<template>
  <div class="modal fade user-modal" tabindex="-1">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <ul class="nav nav-tabs" role="tablist">
          <li id="login-indicator" class="active">
            <a href="#login" role="tab" data-toggle="tab">Đăng nhập</a>
          </li>
          <li id="signup-indicator">
            <a href="#signup" role="tab" data-toggle="tab">Đăng ký</a>
          </li>
        </ul>

        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active fade in" id="login">
            <form>
              <div class="input-field">
                <input type="email" name="Email" id="email" placeholder="Email"/>
              </div>
              <div class="input-field">
                <input type="password" name="Password" id="password" placeholder="Mật khẩu"/>
              </div>
              <div class="input-field check-field">
                <input type="checkbox" id="remember" name="remember"/><label for="remember">Ghi nhớ tài
                khoản</label><br/>
              </div>
              <div class="input-field">
                <input id="login-btn" data-dismiss="modal" value="Đăng nhập"/>
              </div>
              <button data-toggle="modal" data-target="#reset-password" data-dismiss="modal"
                      class="btn btn-default"><i class="fa fa-question-circle-o"></i> Quên mật khẩu?
              </button>
            </form>
          </div>
          <div role="tabpanel" class="tab-pane fade" id="signup">
            <form>
              <div class="input-field">
                <input type="email" name="Email" id="email" placeholder="Email"/>
              </div>
              <div class="input-field">
                <input type="password" name="Password" id="password" placeholder="Mật khẩu"/>
              </div>
              <div class="input-field check-field">
                <input type="checkbox" id="remember" name="remember"/><label for="remember">Hiển thị mật
                khẩu</label><br/>
              </div>
              <div class="input-field">
                <input type="text" name="Name" id="name" placeholder="Họ tên"/>
              </div>
              <div class="input-field">
                <input type="text" name="Phone" id="phone" placeholder="Số điện thoại"/>
              </div>
              <div class="input-field">
                <input id="signup-btn" type="submit" value="Đăng ký"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

</style>
