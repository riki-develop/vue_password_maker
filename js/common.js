window.onload = () => {
    //////////////////////////////
    //・スマホ_ダブルタップ防止
    //////////////////////////////
    document.addEventListener("dblclick", function(e){ e.preventDefault();}, { passive: false })

    //////////////////////////////
    //・デバイス毎にスタイル切り分け
    //////////////////////////////
    if (window.innerWidth <= 620) {
        document.getElementById('outer-wrap').classList.value = "col-20 offset-2 bg-white b-shadow pt-5"
        document.getElementById('textarea').classList.value = "text-end m-auto"
        document.getElementById('inner-wrap').classList.value = "col-20 offset-2"
    }

    //////////////////////////////
    //・クリックイベント
    //・リロード制御
    //////////////////////////////
    const copyText = document.getElementById("copy-text")
    let keepId = document.getElementById('keep-data')
    let keepLeng = localStorage.length

    // const keepData = document.getElementById('keep-data')
    // if (keepData.hasChildNodes()) {
    //     const keepWrap = document.getElementById('keep-data-wrap')
    //     keepWrap.style.display ="block";
    // }

    // コピーイベント
    document.querySelector('#copy-btn').addEventListener('click', () => {
        copyText.select()
        document.execCommand("Copy")

        alert("コピーしました！ : " + copyText.value)
    })

    // 一時保存
    document.querySelector('#keep-btn').addEventListener('click', () => {
        if (keepLeng < 5) {
            keepLeng++;
            localStorage.setItem(keepLeng, copyText.value)

            let getPassOnClick = localStorage.getItem(keepLeng)
            keepId.insertAdjacentHTML(
                'beforeend',
                '<li>' +
                `<input class="form-control text-center mb-1" type="text" value="${getPassOnClick}" readonly>` +
                '<button class="js-copy-btn btn-primary rounded-1 mb-4 px-2 py-1">コピーする</button>' +
                '</li>'
            )
            window.location.reload(false)
        }else{
            alert('5つ以上は保存できません')
        }
    })

    // リロードしたらストレージをレングス分回して出力
    // if (performance.navigation.type === 1) {
        for(let i = 1; i <= keepLeng; i++) {
            let getPassReload = localStorage.getItem(i)
            keepId.insertAdjacentHTML(
                'beforeend',
                '<li>' +
                `<input class="form-control text-center mb-1" type="text" value="${getPassReload}" readonly>` +
                '<button class="js-copy-btn btn-primary rounded-1 mb-4 px-2 py-1">コピーする</button>' +
                '</li>'
            )
        }
    // }

    // 一時保存したパスワード_クリックイベント
    let btns = document.querySelectorAll('.js-copy-btn')

    btns.forEach((target) => {
        target.addEventListener('click', () => {
            let preTarget = target.previousElementSibling

            preTarget.select()
            document.execCommand("Copy")

            alert("コピーしました！ : " + preTarget.value)
        })
    })

    // 一括削除
    document.querySelector('#delete-btn').addEventListener('click', () => {
        while(keepId.lastChild) {
            keepId.removeChild(keepId.lastChild);
        }

        localStorage.clear()
        keepLeng = 0
    })
}