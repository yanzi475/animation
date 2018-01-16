
Zepto(function($){
    var list = $('.course-list').on('click','span',function(e){
            var e = e || e.event;
            var node = e.target || e.srcElement;
            node.classList.toggle('course-checked');
        })

    let num = 0;
    function count() {

        let  setCount = () =>{

            num++;
            console.log(num);

        }
        return setCount();

    }
    count();
})

