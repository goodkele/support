# PHP

---
1. 类型
	1. bool
	2. 整型：int8,byte,int16,int,uint,uintptr 等
	3. 浮点类型：float32,float64
	4. 复数类型：complex64, complex128
	5. 字符串：string
	6. 字符类型：byte,rune
	7. 错误类型：error
	8. 复合类型指针：pointer
	9. 复合类型数组：array
	10. 复合类型切片：slice
	11. 复合类型字典：map
	12. 复合类型通道：chan
	13. 复合类型结构体：struct
	14. 复合类型接口：interface
2. 顺序编程
3. 操作符


## 1 变量&类型
### 1.1 声明
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

### 1.2 变量初始化
	var a int				// int默认值0
	var b *int				// 指针默认值为nil
	
	c := make(chan int)		// chan类型只能用make 初始化
	d := make(map[string]int)//map类型只能用make 初始化

### 1.3 变量赋值
	var a int
	a = 10					// 正常赋值

	c, d = d, c				// 交换
	
### 1.4 常量
	const PI float64 = 3.1415926 // 带类型常量
	const zero = 0.0		// 不带类型常量等于字面常量
	const a, b = 1, 2		// 无类型常量
	const (					// 无类型常量
		c = "a"
		d = 123
	)
	const (
		e = iota			// 0
		f = iota			// 1
		g = iota			// 2
	)
	const (
		h = iota			// 0
		i					// 1
		j					// 2
	)
	
### 1.5 枚举
	const (
		Sunday = iota		// 0
		Monday 				// 1
		Tuesday
		Wednesday
		Thursday
		Friday
		Saturday
	)

### 1.6 chan
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

### 1.6 bool 类型
	var a bool				// bool类型只接受true或者false
	a = true
	a = false
	a = 1					// error 编译错误
	a = bool(1)				// error 也不支持自动或者强制类型转换 

### 1.6 整型
	var a int8				// -128~127
	var b uint8				// 0~255
	var c int16				// -32768~32767
	var d uint16			// 0～65535
	var e int32				// -2147483648～2147483647
	var f uint32			// 0～4294967295
	var g int64				// -9223372036854775808～9223372036854775807
	var h uint64			// 0～18446744073709551615
	var i int				// 平台相关
	var j uint				// 平台相关
	var k uintptr			// 32平台4字节，64平台8字节

	var a int32				// int32类型
	b := 64					// int 类型
	a = b 					// error 类型 不同不能赋值
	a = int32(b)			// 64

	// 位运算
	x << y					// 左移
	x >> y					// 右移
	x ^ y					// 异或
	x & y					// 与
	x | y					// 或
	^x						// 取反

	124 << 2				// 496
	124 >> 2				// 31
	124 ^ 2					// 126
	124 & 2					// 0
	124 | 2					// 126
	^2						// -3

### 1.6 浮点类型
	var a float32			// 浮点类型采用IEEE-754标准
	var b float64			// 等于C的double类型
	c := 12					// 自动推到为整型
	d := 12.0				// 推到为float64类型

	// 浮点数比较
	// 浮点数不是精确的表达方式，不推荐用==来判断两个浮点数是否相等。推荐使用

	import "math"

	// p 为用户自定义的比较精度，比如0.00001
	func isEqual(f1, f2, p float64) bool {
		return math.Fdim(f1, f2) < p
	}
	
### 1.6 复数类型

### 1.6 字符串
	var a string			// 空字符串
	b := "hello"			// 
	b[1]					// 一个字符byte，'e'
	len(b)					// 5个字符
	c := "hello世界"			//
	len(c)					// 11个字符，世界为utf8编码，每个占3个字节
	b + c					// hellohello世界，+符号为字符连接符

	d := "hello,世界"		// 
	for i:=0; i<len(d); i++ {
		fmt.Println(d[i])	// d[i]类型为byte
	}

	for i, ch := range a {
		fmt.Println(i, ch)	// i为字符开始下标，ch为rune类型字符
	}

### 1.6 字符类型 byte & rune

byte 为 uint8别名

rune 为 4字节。应该是用uint32来保存

### 1.6 数组
数组是值类型，函数传值时会发生复制操作

	[32]byte				// 长度为32的byte数组
	[2]struct{x, y int32}	// 长度为2的struct类型
	[1000]*float			// 长度为1000的指针数组
	[3][5]int				// 二维数组

	var a [5]int = [5]int{1,2,3,4,5} // 1,2,3,4,5
	var b [5]int = [5]int{1}// 1,0,0,0,0
	
### 1.6 数组切片
	// 从数组创建切片
	var a [5]int = [5]int{1,2,3,4,5,6,7,8,9,10}
	var b []int = a[:5]		// 1,2,3,4,5
	var c []int = a[1,2]	// 2
	var d []int = a[5:]		// 6,7,8,9,10
	var e []int = a[:]		// 1,2,3,4,5,6,7,8,9,10

	 
`make只能用来创建slice,map,chan。make返回引用。new创建会返回指针`

	// 直接创建切片
	f := make([]int, 5)		// 0,0,0,0,0
	g := make([]int, 5, 10) // 0,0,0,0,0。cap长度为10
	h := []int{1,2,3}		// 1,2,3

	// 元素遍历
	for i:=0; i<len(h); i++ {
		fmt.Println(h[i])	// 1\n, 2\n, 3\n
	}

	for _, val := range h {
		fmt.Println(h[i])	// 1\n, 2\n, 3\n
	}
	
	// 动态增减元素
	a := make([]int, 5)		// 0,0,0,0,0
	b := []int{1,2,3,4,5}	// 1,2,3,4,5

	c := append(a, b...)	// 0,0,0,0,0,1,2,3,4,5
	d := append(a, 1,2,3)	// 0,0,0,0,0,1,2,3
	
`基于数组或者基于切片创建切片，当切片改变时原数组也会改变`

	// 基于切片创建切片
	var a []int = []int{1,2,3,4,5}
	b := a[:3]

	// 内容复制
	var a []int = []int{1,2,3}
	var b []int = []int{4,5,6,7,8,9}

	copy(a, b)				// a为3,4,5
	copy(b, a)				// b为1,2,3,7,8,9

### 1.6 map	

	var a map[string]int	// 
	a = make(map[string]int) // 初始化
	a["hello"] = 1			// 元素赋值
	a["world"] = 2			// 元素赋值
	delete(a, "world")		// 元素删除
	
	i := a["hello"]			// i为1
	i,ok := a["hello"]		// i为1,ok为true
	i,ok := a["notok"]		// i为0,ok为false
	

## 2 流程控制
### 条件语句
	if true {				// 注意，golang不允许return在if中
		...
	} else {
		...
	}

### 选择语句

`fallthrough，在switch里执行下一个`
`golang里不需要break退出`

	// i=0， 输出0
	// i=1， 输出1
	// i=2， 输出3 
	// i=3， 输出3
	// i=4， 输出4, 5, 6
	// i=5， 输出4, 5, 6
	// i=6， 输出4, 5, 6
	// i=任意，输出Default
	switch i {
		case 0:
			fmt.Println("0")
		case 1:
			fmt.Println("1")
		case 2:
			fallthrough
		case 3:
			fmt.Println("3")
		case 4,5,6:
			fmt.Println("4,5,6")
		default :
			fmt.Println("Default")
	}

switch 后边无表达式。作用与多个if...else...逻辑作用相同

	switch {
		case 0 <= Num && Num <= 3 :
			fmt.Println("0~3")
		case 4 <= Num && Num <= 6 :
			fmt.Println("4~6")
		case 7 <= Num && Num <= 9 :
			fmt.Println("7~9")
	}

### 循环语句
`只有for关键字的循环，golang里没有其他循环关键字`

	for i:=0; i<10; i++ {
		...
	}

	// 等于while{}，无限循环
	sum := 0
	for {
		sum++
		if sum>100 {
			break
		}
	}

	// golang不支持i:=0,j:=0这样的逗号赋值
	for i, j := 0, 0; i<10 && j<10; i,j=i+1,j+1 {
		...
	}
	
	// 支持continue，break关键字
	ForHere:
	for i:=0; i<10; i++ {
		if i >= 5 {
			break ForHere
		}
	}
	

### 跳转语句

	func myFunc() {
		i := 0
		HERE:
		fmt.Println(i)
		i++
		if i < 10 {
			goto HERE
		}
	}

### select
	var n int
	for {
		select {
			case n = <- ch
		}
	}

	// select超时
	var n int
	chFor : 
	for {
		select {
			case n = <- ch:
			case <- time.After(time.Second * 3):
				break chFor
		}
	}




## 3 函数

### 函数定义

### 函数调用

### 不定参数

### 多返回值

### 匿名函数与闭包

## 4 错误处理

