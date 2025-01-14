// *********************************
// 定数
// *********************************
// 小文字→大文字
const CONVERT_TO_UPPER = "1"

// 大文字→小文字
const CONVERT_TO_LOWER = "2"

// キャメルケース
const CONVERT_TO_CAMEL_CASE = "3"

// スネークケース
const CONVERT_TO_SNAKE_CASE = "4"

// *********************************
// アルファベット文字列変換クラス
// *********************************
class ConvertCase {
    // コンストラクタ
    constructor() {
        // コンストラクタ内でイベントリスナーを設定
        document.getElementById("btnConvert").addEventListener("click", this.convertCaseRadioButtonClick.bind(this));
        
        // メンバ変数
        // 変換前テキストボックス
        this.inputTextBox = document.getElementById('inputText');

        // 変換後テキストボックス
        this.outputTextBox = document.getElementById('outputText');
    }


  
    // *********************************
    // メソッド：convertCaseRadioButtonClick
    // 処理内容：変換ボタンクリックイベント
    // 引数　　：なし
    // 戻り値　：なし
    // *********************************
    convertCaseRadioButtonClick() {
        // バリデーションチェック
        //alert(checkValue);

        // ラジオボタンの選択値を取得
        let checkValue = this.getConvertCaseRadioButtonValue();
            
        // 変換種別ラジオボタンの選択値によって処理を変更する
        switch(checkValue){
            // 小文字→大文字
            case CONVERT_TO_UPPER:
                this.ConvertToUpper();
                break;
            // 大文字→小文字
            case CONVERT_TO_LOWER:
                this.ConvertToLower();
                break;
            // キャメルケース
            case CONVERT_TO_CAMEL_CASE:
                this.ConvertToCamelCase();
                break;
            // スネークケース
            case CONVERT_TO_SNAKE_CASE:
                this.ConvertToSnakeCase();
                break;
            // それ以外
            default:
                alert("変換種別ラジオボタンがありえないボタンを選択しています");
        }

        // 選択された値をアラート表示
        // alert(checkValue);
      
    }

    // *********************************
    // メソッド：getConvertCaseRadioButtonValue
    // 処理内容：変換種別ラジオボタンの選択値を取得
    // 引数　　：なし
    // 戻り値　：変換種別ラジオボタンの選択値
    // *********************************
    getConvertCaseRadioButtonValue(){
        try{
            // ラジオボタンの選択値を取得
        const elements = document.getElementsByName('convertCaseRadioButton');
        let checkValue = '';

        for (let i = 0; i < elements.length; i++) {
            if (elements[i].checked) {
            checkValue = elements[i].value;
            break; 
            }
        }

        return checkValue;
        }
        catch(e){
            alert(e.message);
        }
    }

    // *********************************
    // メソッド：ConvertToLower
    // 処理内容：大文字→小文字変換処理
    // 引数　　：なし
    // 戻り値　：なし
    // *********************************
    ConvertToLower(){
        try{
            // 入力文字列を取得
            var inputStr = this.inputTextBox.value;

            // 小文字に変換し、出力テキストボックスに出力
            this.outputTextBox.value = inputStr.toLowerCase();
        }
        catch(e){
            alert(e.message);
        }
    }

    // *********************************
    // メソッド：ConvertToUpper
    // 処理内容：小文字→大文字変換処理
    // 引数　　：なし
    // 戻り値　：なし
    // *********************************
    ConvertToUpper(){
        try{
            // 入力文字列を取得
            var inputStr = this.inputTextBox.value;

            // 大文字に変換し、出力テキストボックスに出力
            this.outputTextBox.value = inputStr.toUpperCase();
        }
        catch(e){
            alert(e.message);
        }
    }

    // *********************************
    // メソッド：ConvertToCamelCase
    // 処理内容：キャメル式変換処理
    // 引数　　：なし
    // 戻り値　：なし
    // *********************************
    ConvertToCamelCase(){
        try{
            // スペース、「_」、「-」で文字列を区切る
            var tagetStr = this.inputTextBox.value;
            var separatorStr = /[\s_-]+/;
            var arrayStr = tagetStr.split(separatorStr);
            
            // キャメルケースに変換する
            let outputStr = ""
            for(let i=0;i<arrayStr.length;i++){
                let workStr = arrayStr[i];
                let firstChar = ""
                // 最初の要素の1文字目はそのまま
                if(i === 0){
                    firstChar = workStr.substr(0,1).toLowerCase();
                    outputStr += workStr;
                    continue;
                }

                // 以降の要素は文字列の1文字目を大文字に変換する
                firstChar = workStr.substr(0,1).toUpperCase();
                let tailStr = workStr.substr(1);
                outputStr += firstChar + tailStr;
            }

            // 出力テキストボックスに出力
            this.outputTextBox.value = outputStr;
        }
        catch(e){
            alert(e.message);
        }
    }

    // *********************************
    // メソッド：ConvertToSnakeCase
    // 処理内容：スネークケース変換処理
    // 引数　　：なし
    // 戻り値　：なし
    // *********************************
    ConvertToSnakeCase(){
        try{
            // スペース、「_」、「-」で文字列を区切り、小文字に変換
            let targetStr = this.inputTextBox.value.toLowerCase();
            let separatorStr = /[\s_-]+/;
            let arrayStr = targetStr.split(separatorStr);
            
            // スネークケースに変換する
            let outputStr = arrayStr.join("_");

            // 出力テキストボックスに出力
            this.outputTextBox.value = outputStr;
        }
        catch(e){
            alert(e.message);
        }
    }
  }

  // クラスのインスタンスを作成してイベントリスナーを有効化
  new ConvertCase();
  