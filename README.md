## Learning Points
1. Outputting List:
    - 1.1 BlogList和Home的关联很重要，通过props
    
2. Props, BlogList
    - 2.1 props可以增加代码重用性
    - 2.2 在BlogList组件中就可以使用Home组件中的list

3. useEffect
    - 3.1 每次运行，加载，初始化，发生useState变化时就会重新渲染一次
    - 3.2 第二个参数[]，可以筛选想要渲染的时机，如[name]则当name改变时重新渲染

