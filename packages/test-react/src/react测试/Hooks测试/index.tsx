import React, { useState, useCallback, useMemo } from 'react'
import Test from './测试依赖复杂对象'

export default function() {
    const [flag, setFlag] = useState(false)
    const [result, setResult] = useState('')

    function handle() {
        setResult(flag ? 'ok' : 'no')
    }

    function handleFlag() {
        setFlag(flag => !flag)
    }

    return (
        // <div>
        //     <button onClick={useCallback(handleFlag, [flag])}>switch flag</button>
        //     <button onClick={useCallback(handle, [flag])}>click me</button>
        //     <div>状态{+flag}</div>
        //     <div>结果{result}</div>
        // </div>
        
        <Test />
    )
}