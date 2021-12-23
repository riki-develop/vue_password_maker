window.onload = () => {
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
    const copyText = document.getElementById("copyText")
    let keepId = document.getElementById('keep-data')
    let keepLeng = localStorage.length;

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
            copyText.select()

            localStorage.setItem(keepLeng, copyText.value)
            let getPassOnClick = localStorage.getItem(keepLeng)
            keepId.insertAdjacentHTML('beforeend', '<li class="keep-pass">'+getPassOnClick+'</li>');
        }else{
            alert('5つ以上は保存できません')
        }
    })

    // 一括削除
    document.querySelector('#delete-btn').addEventListener('click', () => {
        while(keepId.lastChild) {
            keepId.removeChild(keepId.lastChild);
        }

        localStorage.clear()
    })

    // リロードしたらストレージをレングス分回して出力
    if (performance.navigation.type === 1) {
        for(let i = 1; i <= keepLeng; i++) {
            let getPassReload = localStorage.getItem(i)
            keepId.insertAdjacentHTML('beforeend', '<li class="keep-pass">'+getPassReload+'</li>');
        }
    }

    //////////////////////////////
    //・スマホ_ダブルタップ防止
    //////////////////////////////
    document.addEventListener("dblclick", function(e){ e.preventDefault();}, { passive: false })
}