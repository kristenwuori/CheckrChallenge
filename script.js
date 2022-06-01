/******************
 * Name Matching
 *
 *   At Checkr, one of the most important aspects of our work is accurately matching records
 * to candidates. One of the ways that we do this is by comparing the name on a given record
 * to a list of known aliases for the candidate. In this exercise, we will implement a
 * `nameMatch` method that accepts the list of known aliases as well as the name returned
 * on a record. It should return true if the name matches any of the aliases and false otherwise.
 *
 * The nameMatch method will be required to pass the following tests:
 *
 * 1. Exact match
 *
 *   knownAliases = ["Alphonse Gabriel Capone", "Al Capone"]
 *   nameMatch(knownAliases, "Alphonse Gabriel Capone") => true
 *   nameMatch(knownAliases, "Al Capone")               => true
 *   nameMatch(knownAliases, "Alphonse Francis Capone") => false
 *
 *
 * 2. Middle name missing (on alias)
 *
 *   knownAliases = ["Alphonse Capone"]
 *   nameMatch(knownAliases, "Alphonse Gabriel Capone") => true
 *   nameMatch(knownAliases, "Alphonse Francis Capone") => true
 *   nameMatch(knownAliases, "Alexander Capone")        => false
 *
 *
 * 3. Middle name missing (on record name)
 *
 *   knownAliases = ["Alphonse Gabriel Capone"]
 *   nameMatch(knownAliases, "Alphonse Capone")         => true
 *   nameMatch(knownAliases, "Alphonse Francis Capone") => false
 *   nameMatch(knownAliases, "Alexander Capone")        => false
 *
 *
 * 4. More middle name tests
 *    These serve as a sanity check of your implementation of cases 2 and 3
 *
 *   knownAliases = ["Alphonse Gabriel Capone", "Alphonse Francis Capone"]
 *   nameMatch(knownAliases, "Alphonse Gabriel Capone") => true
 *   nameMatch(knownAliases, "Alphonse Francis Capone") => true
 *   nameMatch(knownAliases, "Alphonse Edward Capone")  => false
 *
 *
 * 5. Middle initial matches middle name
 *
 *   knownAliases = ["Alphonse Gabriel Capone", "Alphonse F Capone"]
 *   nameMatch(knownAliases, "Alphonse G Capone")       => true
 *   nameMatch(knownAliases, "Alphonse Francis Capone") => true
 *   nameMatch(knownAliases, "Alphonse E Capone")       => false
 *   nameMatch(knownAliases, "Alphonse Edward Capone")  => false
 *   nameMatch(knownAliases, "Alphonse Gregory Capone") => false
 */
 function nameMatch(knownAliases, name) {
    console.log('hello')
    let result = false;
    for(let i = 0; i < knownAliases.length; i++) {
        if(knownAliases[i] === name) {
            return (result = true)
        } 
    }

    let names = name.split(' ');

    let firstName = names[0];
    let middleName;
    let lastName = names[names.length - 1];

    if(names.length > 2) {
        middleName = names[1];
    }

    knownAliases.forEach(n => {
        let nameParts = n.split(' ');

        if(nameParts.length != 3 || !middleName) {
            if(nameParts [0] == firstName && 
                nameParts[nameParts.length - 1] == lastName) {
                    result = true;
                    return;
                }
        } else {
            if (nameParts[1][0] === middleName[0] && middleName.length == 1 ||
               middleName[0] === nameParts[1][0] && nameParts[1].length == 1) {
                   result = true;
                   return;
               }
        }
    })
    return result;
    // let checkAlias = knownAliases.some((alias)=> alias === name )
    // return checkAlias
    // 1. check to make sure knownAliases AND name are submitted (check for undefined or null)
    // 2. check to make sure you have at least first and last name in data sets
    /// Check for exact match
    /// check ALL aliases minus middle name against given name
    /// check name against all aliases minus middle name
    /// check for middle name or middle initial and check for initial match
     // psuedo code the problem
    // organize your data
    // create error checks
    // code your arguments step by step
    
   
  }
  /** Tests **/
  function assertEqual(expected, result, errorMessage) {
    if (result !== expected) {
      console.log(errorMessage);
      console.log(`expected: ${expected}`);
      console.log(`actual: ${result}`);
      console.log("");
    }
  }
  function test() {
    let knownAliases;
    knownAliases = ["Alphonse Gabriel Capone", "Al Capone"];
    assertEqual(
      true,
      nameMatch(knownAliases, "Alphonse Gabriel Capone"),
      "error 1.1"
    );
    assertEqual(true, nameMatch(knownAliases, "Al Capone"), "error 1.2");
    assertEqual(
      false,
      nameMatch(knownAliases, "Alphonse Francis Capone"),
      "error 1.3"
    );
    // knownAliases = ["Alphonse Capone"];
    // assertEqual(
    //   true,
    //   nameMatch(knownAliases, "Alphonse Gabriel Capone"),
    //   "error 2.1"
    // );
    // assertEqual(
    //   true,
    //   nameMatch(knownAliases, "Alphonse Francis Capone"),
    //   "error 2.2"
    // );
    // assertEqual(false, nameMatch(knownAliases, "Alexander Capone"), "error 2.3");
    // knownAliases = ["Alphonse Gabriel Capone"];
    // assertEqual(true, nameMatch(knownAliases, "Alphonse Capone"), "error 3.1");
    // assertEqual(
    //   false,
    //   nameMatch(knownAliases, "Alphonse Francis Capone"),
    //   "error 3.2"
    // );
    // assertEqual(
    //   false,
    //   nameMatch(knownAliases, "Alphonse Edward Capone"),
    //   "error 3.3"
    // );
    // knownAliases = ["Alphonse Gabriel Capone", "Alphonse Francis Capone"];
    // assertEqual(
    //   true,
    //   nameMatch(knownAliases, "Alphonse Gabriel Capone"),
    //   "error 4.1"
    // );
    // assertEqual(
    //   true,
    //   nameMatch(knownAliases, "Alphonse Francis Capone"),
    //   "error 4.2"
    // );
    // assertEqual(
    //   false,
    //   nameMatch(knownAliases, "Alphonse Edward Capone"),
    //   "error 4.3"
    // );
    // knownAliases = ["Alphonse Gabriel Capone", "Alphonse F Capone"];
    // assertEqual(true, nameMatch(knownAliases, "Alphonse G Capone"), "error 5.1");
    // assertEqual(
    //   true,
    //   nameMatch(knownAliases, "Alphonse Francis Capone"),
    //   "error 5.2"
    // );
    // assertEqual(false, nameMatch(knownAliases, "Alphonse E Capone"), "error 5.3");
    // assertEqual(
    //   false,
    //   nameMatch(knownAliases, "Alphonse Edward Capone"),
    //   "error 5.4"
    // );
    // assertEqual(
    //   false,
    //   nameMatch(knownAliases, "Alphonse Gregory Capone"),
    //   "error 5.5"
    // );
    console.log("Test run finished");
  }
  test();