<!--  -->
<template>
        <div class="moneny">
            <div class="moneny-iitem">
                <p>
                    0.00
                    <span>元</span>
                </p>
                <p>我的余额</p>
            </div>
            <div class="moneny-iitem">
                <p>
                    0
                    <span>个</span>
                </p>
                <p>我的优惠</p>
            </div>
            <div class="moneny-iitem">
                <p>
                    0
                    <span>分</span>
                </p>
                <p>我的积分</p>
            </div>
        </div>
</template>

<script>

export default {
    name:"Money"
}
</script>
<style scoped>
    .moneny {
        display: flex;
    }
    .moneny-iitem {
        flex: 1;
        text-align: center;
        padding: 20px;
        border-left: 1px solid #eee;
        border-bottom: 10px solid #eee;
    }
    .moneny-iitem:first-child {
        border-left: none;
    }
    .moneny-iitem p:first-child {
        font-size: 24px;
        color: #ff5f3e;
        font-weight: 600;
    }
    .moneny-iitem p:first-child span {
        font-size: 16px;
        color: #666;
        font-weight: 400;
    }
</style>