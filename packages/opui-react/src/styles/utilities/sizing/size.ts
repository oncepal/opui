/**
 * 用于同时设置元素宽度和高度
 */
export function useSize(size:string){
    return {
        width:size,
        height:size,
    }
}

/**
 * 使用固定尺寸的宽高
 */
export function useFixedSize(){
    
}
/**
 * 使用百分比尺寸的宽高
 */
export function usePercentageSize(percentage:number){
    return {
        width:600,
        height:percentage+'%',
    }
}
export function useMinSize(){
    
}
export function useMaxSize(){
    
}
export function useFitSize(){
    
}
export function useFullSize(){
    
}