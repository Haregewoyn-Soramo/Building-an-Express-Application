$(document).ready(function(){
  $('form').on('submit',function(){
    event.preventDefault();

    const item = $('input[name="item"]').val(); 
    const todo = { item: item };
    console.log('todo ', todo)

    $.ajax({
      type: 'post',
      url:'/todo',
      data: todo,
      success: function(data){
        location.reload();
      },
        error: function(err) {
        console.error('Error:', err);
      }
    });
    return false;
  });
  $('li').on('click',function(){
    const item = $(this).text().replace(/ /g, "-");
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item,
      success: function(data){
        location.reload()
      }
      ,
      error: function(err) {
        console.error('Error:', err);
      }
  });
  });
});