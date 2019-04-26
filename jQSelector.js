//lecture 1
$(document).ready(
    ()=>{
        $('#lecture-1').click(
            ()=>{
                $('.hideable').hide();
            }
        )
    }
)
$(document).ready(
    ()=>{
        $('#lecture-1-show').click(
            ()=>{
                $('.hideable').show();
            }
        )
    }
)

//lecture 2
$(document).ready(
    ()=>{
        $('#lecture-2').click(
            ()=>{
                $('*').hide();
            }
        )
    }
)

//lecture 3
$(document).ready(
    ()=>{
        $('#lecture-3').click(
            function(){
                $(this).hide();
                console.log(this)
            }
        )
    }
)

//lecture 4
$(document).ready(
    ()=>{
        $('#lecture-4').click(
            ()=>{
                $("p.hide_p").hide();
            }
        )
    }
)

$(document).ready(
    ()=>{
        $('#lecture-4-show').click(
            ()=>{
                $("p.hide_p").show();
            }
        )
    }
)

//lecture 5
$(document).ready(
    ()=>{
        $('#lecture-5').click(
            ()=>{
                $('.hide_first:first').hide();
            }
        )
    }
)