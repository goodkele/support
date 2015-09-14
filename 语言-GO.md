# PHP

---
1. 类型


## 1 类型
### 1 chan
	var ch chan int			// 空 int Channel
	ch := make(chan int) 	// int Channel
	ch := make(chan int, 10)// 十个缓冲区的 int Channel
	ch <- 1					// 像ch Channel 发送 1
	<- ch					// 接受一个ch值
	i := <- ch				// 接受一个ch值，赋值给i
	i, err := <- ch			// 接受一个ch值，如果ch关闭则err为非空



