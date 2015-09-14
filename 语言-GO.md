# PHP

---
1. 类型
2. 顺序编程


## 1 变量&类型
### 1 声明
	var a int				// int
	var b string			// string
	var c [10]int			// int数组长度是10
	var d []int				// int切片
	var e struct {			// 结构体
		f int
	}
	var g *int				// int 指针
	var h map[string]int	// map, key为string类型，value为int类型
	var i func(a int) int	// 函数指针

### 2 变量初始化
	var a int				// int默认值0
	var b *int				// 指针默认值为nil
	
	c := make(chan int)		// chan类型只能用make 初始化
	d := make(map[string]int)//map类型只能用make 初始化

### 3 变量赋值
	var a int
	a = 10					// 正常赋值

	c, d = d, c				// 交换
	
### 4 常量


### 4 枚举


### 1 chan
	var ch chan int			// 空 int Channel
	ch := make(chan int) 	// int Channel
	ch := make(chan int, 10)// 十个缓冲区的 int Channel
	ch <- 1					// 像ch Channel 发送 1
	<- ch					// 接受一个ch值
	i := <- ch				// 接受一个ch值，赋值给i
	i, err := <- ch			// 接受一个ch值，如果ch关闭则err为非空
	close(ch)				// 关闭chan
	var ch1 chan<- int		// 单向只读chan int 
	var ch2 <-chan int 		// 单向只写chan int
	ch3 := chan<- int(ch)	// 转换ch为只读chan int
	ch4 := <-chan int(ch)	// 转换ch为只写chan int


## 2 流程控制
### select
	var n int
	for {
		select {
			case n = <- ch
		}
	}
#### select超时
	var n int
	chFor : 
	for {
		select {
			case n = <- ch:
			case <- time.After(time.Second * 3):
				break chFor
		}
	}

