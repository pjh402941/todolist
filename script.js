//리스트 추가할 부모요소와 인풋 요소 가져오기
const inputBox=document.getElementById("input-box");
const list=document.getElementById("list");

// 입력하면 투두리스트에 등록
function addItem(){
    // 입력값 없을 때
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        list.appendChild(li);

        let close = document.createElement("span");
        close.textContent="\u00D7";
        li.appendChild(close);
    }
    inputBox.value="";
}

// 리스트 클릭하면 체크 및 취소선, close(span) 클릭하면 삭제
list.addEventListener("click", (e) => {
    const t = e.target;

    if (t.tagName === "LI") {
      if (t.classList.contains("checked")) {
        t.classList.remove("checked");
      } else {
        t.classList.add("checked");
      }

    } else if (t.tagName === "SPAN") {
        t.parentElement.remove();
    }
  });  

  // 리셋 버튼 클릭하면 전체 삭제
  let resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", () =>{
    list.innerHTML = "";
  });