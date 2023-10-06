// 버튼0 누르면
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼0에 orange 클래스명 추가
// - 모든div에 붙은 show클래스명 제거
// - div0에 show 클래스명 추가

// for (let i = 0; i < $('.tab-button').length; i++) {
//     $('.tab-button').eq(i).on('click', function () {
//         탭열기(i);
//     })
// }

function 탭열기(숫자) {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}

$('.list').click(function (e) {
    탭열기(parseInt(e.target.dataset.id))
})

// ====================================================//

var car = ['소나타', 50000, 'white'];
var car2 = {
    name: '소나타',
    price: [50000, 3000, 4000]
}

$('.car-title').html(car2['name']);
$('.car-price').html(car2['price'][0]);