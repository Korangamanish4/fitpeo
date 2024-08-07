const useBoolStyles = () => {

const booleanStyle = (className, condition) => {
    return condition ? className : ''
}

  return booleanStyle
}

export default useBoolStyles