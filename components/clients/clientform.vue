<template>
    <div class="main-container">
        
        <div class="list-category">
            <div class="rem-subscription" id="rem-subscription"></div>
            <div class="ctgy-red">
                <div class="red-container">
                    <div class="serial-num">
                        <h2 class="sn">1</h2>
                    </div>
                    <div class="c-name">
                        <h2>Name of Client</h2>
                    </div>
                </div>
            </div>

            <div class="ctgy-red">
                <div class="red-container">
                    <h3>Ending this month</h3>
                    <div>
                        <p>lists of clients</p>
                    </div>
                </div>
            </div>

            <div class="ctgy-red">
                <div class="red-container">
                    <h3>Ending this year</h3>
                    <div>
                        <p>lists of clients</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss">
    .main-container {
        background: #fff;
        margin: 0;
        padding: 0;
       
    }

    .list-category {
        // position: absolute;
        color: blue;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 0 auto 0 20px;
        
        .ctgy-red {
            align-items: center;
            background: linear-gradient(to right, #ffb8b8, #fb8383);
            width: 60%;
            margin: 10px auto 10px 0;
            padding: 10px 20px;
            border: none;
            border-radius: 5px 10px;

            .red-container  {
                display: flex;
                flex-direction: row; 

                .serial-num {
                    background: red;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .sn{
                        width: 80%;
                        height: 80%;
                        text-align: center;
                        line-height: 50px;
                    }
                }

                .c-name {
                    margin: 15px auto 0px 10px;
                    font-weight: 700;
                }
            }
        }
        // .rem-subscription {
        //     background-color: red;
        //     position: absolute;
        //     top: 50%;
        //     left: 0;
        //     transform:translateY(-50%);
        //     height: 4px;
        //     width: 20%;
        //     z-index: -1;
        //     transition: 0.4s ease;
        // }
        
    }

</style>