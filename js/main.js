// ページ切り替え
$(function(){
    $('#artworks-turn').turn(
        {
            // 自動でページをめくった時の高さ
            elevation: 50,

            // ページめくりのスピード(ms)
            duration: 1000,

            // ページをめくるときの影
            gradients: true,

            // 自動中央揃え
            autoCenter: true,

            // 右開きか左開きか(rtl:右開き、ltr:左開き)
            direction: 'ltr',

            zoom: true
        }
    );

    // 前のページボタンが押されたとき
    $('#prevpage').click(function(){
        $('#artworks-turn').turn('previous');
    })

    // 次のページボタンが押されたとき
    $('#nextpage').click(function(){
        $('#artworks-turn').turn('next');
    })
});

// ボタンアニメーション
