<template>
    <div class="container">
        <div class="main">
            <input type="checkbox" id="chk" aria-hidden="true">
            <div class="signup">
                <label for="chk" aria-hidden="true">Login</label> 
                <input type="text" name="txt" placeholder="TenantId" required>
                <input type="text" name="txt" placeholder="Username" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="button">Login</button>
            </div>

            <div class="login">
                <label for="chk" aria-hidden="true">Sign up</label>
                <input type="text" name="txt" placeholder="Username" required>
                <input type="email" name="txt" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="button">Sign up</button>
            </div>

        </div>
    </div>
    
</template>

<style lang="scss">
    .container {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-family: 'Jost', sans-serif;
        background: linear-gradient(90deg,#46dcf8,#2250e4);

        .main {
            width: 350px;
            height: 500px;
            background: rgba(55,118,194,.58);
            overflow: hidden;
            border-radius: 20px;
            box-shadow: 0 10px 10px rgba(0,0,0,.2);

            #chk {
                display: none;
            }

            .signup {
                position: relative;
                width: 100%;
                height: 100%;
            }
            label{
                color: #fff;
                font-size: 2.3em;
                justify-content: center;
                display: flex;
                margin: 60px;
                font-weight: bold;
                cursor: pointer;
                transition: .5s ease-in-out;
            }
            input {
                width: 60%;
                height: 20px;
                background: #e0dede;
                justify-content: center;    
                display: flex;
                margin: 20px auto;
                padding: 15px;
                border: none;
                outline: none;
                border-radius: 5px;
            }
            button {
                width: 60%;
                height: 40px;
                margin: 10px auto;
                justify-content: center;
                display: block;
                color: #fff;
                background: #2250e4;
                font-size: 1em;
                font-weight: bold;
                margin-top: 20px;
                outline: none;
                border: none;
                border-radius: 5px;
                transition: .2s ease-in;
                cursor: pointer;

                &:hover {
                    background: #1c43c4;
                }
            }
            .login {
                height: 460px;
                background: #eee;
                border-radius: 60% / 10%;
                transform: translateY(-180px);
                transition: .8s ease-in-out;
            }
            
            .login label {
                color: rgba(7, 160, 248, 0.58);
                transform: scale(.6);
            }

            #chk:checked ~ .login{
                transform: translateY(-500px);
            }
            #chk:checked ~ .login label{
                transform: scale(1);
            }
            #chk:checked ~ .signup label{
                transform: scale(.6);
            }
        }
    }

</style>