<template>
  <main>
    <div class="container_12">
        <div class="grid_12">
            <div id="constructor" class="constructor-block">
                <div class="cb-top-line">
                    <div class="cb-step cb-step--current" data-step="cb-item1" id="cb-step1">
                        <p>
                            <span>1</span>
                            Изображение
                        </p>
                    </div>
                    <div class="cb-step" data-step="cb-item2" id="cb-step2">
                        <p>
                            <span>2</span>
                            Рама
                        </p>
                    </div>
                    <div class="cb-step" data-step="cb-item3" id="cb-step3">
                        <p>
                            <span>3</span>
                            Заголовок
                        </p>
                    </div>
                    <div class="cb-step" data-step="cb-item4" id="cb-step4">
                        <p>
                            <span>4</span>
                            Цвет отпечатков
                        </p>
                    </div>
                </div>
                <div class="cb-result">
                    <div class="cb-result__title">
                        <p>Ваша картина</p>
                    </div>
                    <div class="cb-result__content">
                        <p class="cb-result__data">
                            <span>Изображение:</span>
                            <strong></strong>
                            <strong>Не выбрано</strong>
                        </p>
                        <p class="cb-result__data">
                            <span>Рама:</span>
                            <strong></strong>
                            <strong>Не выбрано</strong>
                        </p>
                        <div class="cb-result__data">
                            <span>Отпечатки:</span>
                            <strong>Не выбраны</strong>

                        </div>
                        <div class="cb-result__object">
                            <div class="cb-result__img">

                            </div>
                            <div class="cb-result__border">

                            </div>
                            <p class="cb-result__text__title ariston"></p>
                            <p class="cb-result__text__name ariston"></p>
                            <p class="cb-result__text__date ariston"></p>
                        </div>
                    </div>
                    <div class="cb-result__bottom">
                        <form action="" method="POST">
                            <p class="cb-next">Далее</p>
                            <input name="result" id="" type="text" hidden="">
                        </form>
                    </div>
                </div>
                <div class="cb-wrapper">
                    <div id="cb-items" class="cb-item1">
                      <router-view />
                        <!-- /////////////////////////////////////////////////////////////////////////// -->
                       
                        <!-- /////////////////////////////////////////////////////////////////////////// -->
                        
                        <!-- /////////////////////////////////////////////////////////////////////////// -->
                        
                        <!-- /////////////////////////////////////////////////////////////////////////// -->
                    </div>
                </div>
                <div class="cb-bottom-line">
                    <div class="cb-total">
                        <span class="cb-total__text">Стоимость:</span><span class="cb-total__amount"> 550</span>
                        <span class="cb-total__currency"> грн</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>