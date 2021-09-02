window.onload = () => {
    // デバイス別でclass差替
    if (window.innerWidth <= 620) {
        document.getElementById('outer-wrap').classList.value = "col-20 offset-2 bg-white b-shadow pt-5"
        document.getElementById('textarea').classList.value = "text-end m-auto"
        document.getElementById('inner-wrap').classList.value = "col-20 offset-2"
    }

    // コピーイベント
    document.querySelector('#copyText + button').addEventListener('click', () => {
        const copyText = document.getElementById("copyText")
        copyText.select()
        document.execCommand("Copy")

        alert("コピーしました！ : " + copyText.value)
    })
}