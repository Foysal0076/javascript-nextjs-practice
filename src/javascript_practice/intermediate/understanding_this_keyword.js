const obj = {
    function1() {
        console.log(this == global)
    },

    function2() {
        function function3() {
            console.log(this == global)
        }
        return function3()
    }
}

function function4() {
    console.log(this == global)
}

//* Look for, from which scope the function has been invoked

const test1 = obj.function1 //* Extracted from obj and then assigned to global variable test1
test1() //* True because invoked from global scope
obj.function1() //* False because invoked from object scope

const test2 = obj.function2
test2() //* True because invoked from global scope
obj.function2() //* True because invoked from global scope //Because of return function3()

function4() //* True as it is invoked in global scope
