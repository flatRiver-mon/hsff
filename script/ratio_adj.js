$(document).ready(function(){
    // 종횡비가 비교적 크다는 이야기는 -> 보다 세로로 길쭉하다.
        // 종횡비 = 세로길이(분자)/가로길이(분모)
    // 박스의 종횡비를 구한다.
    // 그 박스 안에 있는 그림의 종횡비를 구한다.
    // 두 종횡비를 비교하여그림의 사이즈를 정한다.
        // 만약 박스보다 그림이 종횡비가 더 크면
        // (박스보다 그림이 더 세로로 길쭉하면)
            // 그림의 가로길이를 박스의 가로길이로 지정(세로 자동)
        // 만약 그게아니고 박스보다 그림의 종횡비가 더 작으면
        // (박스보다 그림이 더 가로로 길쭉하면)
            // 그림의 세로길이를 박스의 세로길이로 지정(가로 자동)

    function ratioFit(){
        $(".ratiobox").each(function(){
            var boxW = $(this).width();
            var boxH = $(this).height();
            var boxRatio = boxH/boxW;
            var imgRatio = $(this).children("img").height()/$(this).children("img").width();

            if(imgRatio>boxRatio){
                // 박스보다 그림이 세로로 더 길다
                $(this).children("img").width(boxW).height("auto");
            }else{
                // 박스보다 그림이 가로로 더 길다
                $(this).children("img").height(boxH).width("auto");
            }
        });
    }

    ratioFit();

    $(window).resize(function(){
        ratioFit();
    });
});