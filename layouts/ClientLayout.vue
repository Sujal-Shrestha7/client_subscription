<template>
    <div class="main-container">
        <h2>ClientLayout</h2>
        <div class="list-category">

            <div class="ctgy-red">
                <div class="red-container">
                    <h3>Ending this week</h3>
                    <div>
                        <p>lists of clients</p>
                    </div>
                </div>
            </div>

            <div class="ctgy-orange">
                <div class="orange-container">
                    <h3>Ending this month</h3>
                    <div>
                        <p>lists of clients</p>
                    </div>
                </div>
            </div>

            <div class="ctgy-green">
                <div class="green-container">
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

    .list-category {
        color: blue;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 20px auto 0 20px;
        
        
    }

</style>