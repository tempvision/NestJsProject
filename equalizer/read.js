function loadJson( callback ) {
  var xobj = new XMLHttpRequest( );
  xobj.overrideMimeType( "application/json" );
  xobj.open( 'GET', 'inputQuiz.json', true );
  xobj.onreadystatechange = function ( ) {
    if ( xobj.readyState == 4 && xobj.status == '200' ) {
      callback( xobj.responseText );
    }
  };
  xobj.send( null );
}

function uuidv4( ) {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, function ( c ) {
    var r = Math.random( ) * 16 | 0,
      v = c == 'x' ? r : ( r & 0x3 | 0x8 );
    return v.toString( 16 );
  } );
}

function init( ) {
  loadJson( function ( response ) {
    let actualJson = JSON.parse( response );
    let quiz = actualJson.quiz;

    var moduleId = 0;
    var partId = 0;
    var questionId = 0;
    var answerId = 0;


    for ( const moduleName in quiz ) {
      moduleId += 1;
      let modules = quiz[ moduleName ];

      // console.log( modules )

      for ( const partName in modules ) {

        if ( modules.hasOwnProperty( partName ) ) {
          partId += 1;
          const element = modules[ partName ];
          // console.log( partName )

          // console.log( `${partId}, '${partName}', ${moduleId}` );

          element.forEach( el => {
            questionId += 1;
            const question = el.question;
            // console.log( `${questionId}, '${question}', ${partId}` );
            // console.log( question );
            const options = el.options;
            // console.log( options );
            const answers = el.answer;
            // console.log( answers );
            for ( let x = 0; x < options.length; x += 1 ) {

              answerId += 1;
              // console.log( `${answerId} ,'${options[ x ]}', ${answers[x]}, ${questionId}` )
            }
          } );
        }

      }
    }
    // console.log( `ModuleId count - ${moduleId}` );
    // console.log( `Part of module count - ${partId}` );
    // console.log( `Question count - ${questionId}` );
    // console.log( `Answer count - ${answerId}` );
  } )
}
init( );


// console.log( uuidv4( ) )