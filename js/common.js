window.onload = () => {
    // デバイス別でclass差替
    if (window.innerWidth <= 620) {
        document.getElementById('outer-wrap').classList.value = "col-20 offset-2 bg-white b-shadow pt-5"
        document.getElementById('textarea').classList.value = "text-end m-auto"
        document.getElementById('inner-wrap').classList.value = "col-20 offset-2"
    }

    // パスワード生成要素
    const copyText = document.getElementById("copyText")

    // コピーイベント
    document.querySelector('#copy-btn').addEventListener('click', () => {
        copyText.select()
        document.execCommand("Copy")

        alert("コピーしました！ : " + copyText.value)
    })

    // キープイベント
    let keepNum = localStorage.length;

    // localStorage.removeItem('1')
    // localStorage.removeItem('2')
    // localStorage.removeItem('3')
    // localStorage.removeItem('4')
    // localStorage.removeItem('5')
    // localStorage.removeItem('6')

    document.querySelector('#keep-btn').addEventListener('click', () => {
        if (localStorage.length < 5) {
        keepNum++;
        copyText.select()

        localStorage.setItem(keepNum, copyText.value)
        }else{
            alert('5つ以上は保存できません')
        }
    })

    // リロードしたらストレージをレングス分回して出力
    if (performance.navigation.type === 1) {
        for(let i = 1; i <= localStorage.length; i++) {
            let getPass = localStorage.getItem(i)
            let keepId = document.getElementById('keep-data')
            keepId.insertAdjacentHTML('beforeend', '<div class="keep-password">'+getPass+'</div>');
        }
    }


    // iPhoneダブルタップ防止
    document.addEventListener("dblclick", function(e){ e.preventDefault();}, { passive: false })
}