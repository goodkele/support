
#### 2018-05-22 周二
* 试用客户管理功能
    * 新建客户（客户是未买课程的用户）
    * 客户资源
        * 分配员工跟进客户
        * 员工跟进客户
        * 客户转校
        * 客户安排试听
        * 客户回收（是潜在学员才可以回收）
    * 业务跟进统计
        * 查询所有员工跟进的客户

* 查看权限代码
    * auth_menu       菜单权限
    * auth_menu_role  菜单权限角色关联
    * auth_perm       菜单下详细权限
    * auth_perm_role  菜单下详细权限角色关联
    * auth_role       角色
    * auth_role_user  角色用户关联
* RBAC
    * 普通RBAC结构
        * 角色表 <-- 权限角色关联表 --> 权限表
        * 用户表 <-- 用户角色关联表 --> 角色表
    * 带用户组RBAC结构
        * 角色表 <-- 权限角色关联表 --> 权限表
        * 用户组 <-- 用户组角色关联表 --> 角色表
        * 用户表 <-- 用户角色关联表 --> 角色表 
        * 用户表 <-- 用户用户组关联表 --> 用户组
    * 带用户组，页面元素RBAC结构
        * 角色表 <-- 权限角色关联表 --> 权限表
        * 权限表 <-- 权限操作集关联表 --> 权限表-菜单，页面元素，文件夹
        * 用户组 <-- 用户组角色关联表 --> 角色表
        * 用户表 <-- 用户角色关联表 --> 角色表 
        * 用户表 <-- 用户用户组关联表 --> 用户组
    * RBAC 帖子 https://blog.csdn.net/painsonline/article/details/7183613/    
        
#### 2018-05-23 周三
* 新建客户（客户是未买课程的用户）
    * 新建客户，记录客户求学需求，联系地址，紧急联系人
    * 客户资源，分配客户，客户转校，客户回收，客户跟进，安排客户试听，记录客户反馈
    * 业务跟进统计，查看所有老师客户跟进的进度（待跟进，跟进中，签约确认，签约未付清）
    * 客户信息导入，Excel导入客户
* 试用报名管理功能
    * 报名收费
    * 预充值卡
    * 在读学员
    * 班级管理
    * 排课管理
        * 排课模式-默认 
        * 排课模式-教师模式 
        * 排课模式-教室模式 
        * 预排课模式 
        * 一对一模式
    * 招生计划
    * 欠费查询
    * 合同管理
* 试用消耗管理
    * 班级点名
    * 请假管理
* 试用教务管理
    * 校区管理
    * 教室管理
    * 老师管理
    * 课程管理
    * 课程关系管理
    * 教学用品管理
    * 考试报名管理
* 试用财务管理
    * 收入统计（列表）
        * 已交付
            * 按学员
            * 按人次
        * 未交付
        * 定金
        * 预充值卡
            * 购买记录
            * 消费记录
        * 合同流水
            * 按合同
            * 按流水
        * 到期余额转收入
    * 可用余额管理
    * 欠费查询
    * 退费处理
    * 代金卷管理
        * 代金卷发放规则
        * 代金卷主动发放
        * 代金卷统计
* 试用人事管理
    * 部门及岗位
    * 员工管理
* 试用系统设置
    * 教务相关
    * 市场相关
    * 运营相关
    * 预充值卡相关
    * 财务相关
    * 消息相关
    * 节假日相关
* 试用报表中心
* 试用个人中心
    * 基本信息
    * 工作台
    * 老师教务
    * 消息
    * 群发
    * 修改密码
    * 退出登录

#### 2018-05-24 周四
* 团建休假

#### 2018-05-25 周五
* 数据库结构 common库
    * comm_short_url    短地址
    * k12_class_info    报名管理 - 班级信息表
    * k12_class_tag     报名管理 - 班级标签表
    * k12_course_info   教务管理 - 课程信息表
    * k12_course_tag    教务管理 - 课程标签表
    * k12_cusers        人事管理 - 家长端(C方)用户表
    * k12_cusers_bind   人事管理 - 家长端(C方)用户-第三方绑定表
    * k12_teacher_info  教务管理 - 老师信息表
    * k12_teacher_tag   教务管理 - 老师标签表
    * k12_users         人事管理 - 培训机构(B方)用户表
    * k12_users_bind    人事管理 - 培训机构(B方)用户表-第三方绑定表
    * log               
    * sale_apply_probation  申请试用表
    * sale_merchant     商户表
    * sale_users        人事管理 - 本站销售平台用户表
* 数据库结构 机构库
    * k12_apply_class_continue	报名管理 - 班级续班提醒
    * k12_apply_class_info_onetoone	报名管理 - 一对一班级信息表，FK k12_apply_info
    * k12_apply_class_member		报名管理 - 班级中在读学员信息表
    * k12_apply_edc_learn_log		education chain教育接口结班学员上报日志
    * k12_apply_freeze		报名管理 - 在读学员 冻结信息表
    * k12_apply_info 			报名管理 - 报名/购买记录表
    * k12_apply_info_concession	报名管理 - 报名/购买整体优惠记录表
    * k12_apply_item			报名管理 - 报名项目记录表(课程/考证报名/教学用品)
    * k12_apply_makeup		报名管理 - 补课安排表
    * k12_apply_prepaid_card		报名管理 - 预充值卡创建/充值记录表
    * k12_apply_refund		报名管理 - 退款记录表(包括退班/退定金)
    * k12_apply_schedule		报名管理 - 课时安排表
    * k12_apply_student_checkin	报名管理 - 学生签到信息表
    * k12_apply_student_schedule	报名管理 - 学生课时安排表(按次购买专用)
    * k12_apply_teacher_checkin	报名管理 - 老师签到信息表
    * k12_apply_teacher_schedule	报名管理 - 老师课时安排表
    * k12_auth_menu 		权限管理 - 菜单列表
    * k12_auth_menu_role	权限管理 - 菜单角色关联表
    * k12_auth_perm 		权限管理 - 权限表
    * k12_auth_perm_role 	权限管理 - 权限角色关联表
    * k12_auth_role 		权限管理 - 角色表
    * k12_auth_role_user 	权限管理 - 用户 角色 关联表
    * k12_consumer_audition		客户管理 - 学生试听表
    * k12_consumer_info		客户管理 - 客户信息表
    * k12_consumer_message 		消息表
    * k12_consumer_message_extra	消息扩展表
    * k12_consumer_tag		客户管理 - 客户需求标签表
    * k12_consumer_trail		客户管理 - 销售行为跟进表
    * k12_consumer_transfer		客户管理 - 客户申请转校记录表
    * k12_eduaffair_cert		教务管理 - 考证报名信息表
    * k12_eduaffair_classroom		教务管理 - 教室表
    * k12_eduaffair_realia		教务管理 - 教学用品信息表
    * k12_eduaffair_relation		教务管理 - 课程关系表
    * k12_eduaffair_school_zone	教务管理 - 校区表
    * k12_eduaffair_subject		教务管理 - 老师科目表
    * k12_eduaffair_worktime		教务管理 - 老师工作时间(排课时间)表
    * k12_finaffair_voucher 		财务管理 - 代金券发放规则配置表
    * k12_finaffair_voucher_receive	财务管理 - 代金券发放记录表
    * k12_member_account 		学员管理 - 资金账号信息表
    * k12_member_account_balance 	学员管理 - 资金账号余额类收入表
    * k12_member_account_balance_do	
    * k12_member_expend_log		学员管理 - 课时交付(课消)/学杂费交付日志表
    * k12_member_fund_log		学员管理 - 资金变更日志表
    * k12_member_message 		消息表
    * k12_member_message_extra	消息扩展表
    * k12_member_prepaid_card		学员管理 - 学员预充值卡表
    * k12_setting_concession		系统设置 - 优惠配置表
    * k12_setting_general		系统设置 - 通用配置表
    * k12_setting_holiday		系统设置 - 节假日配置表
    * k12_setting_message_log		消息日志表
    * k12_setting_message_notice	系统设置 - 通知提醒设置表
    * k12_setting_message_template	系统设置 - 消息配置表
    * k12_setting_multi		系统设置 - 多级配置表
    * k12_setting_prepaid_card	系统设置 - 预充值卡配置表
    * k12_setting_refund		系统设置 - 退款配置表
    * k12_setting_sell_action		系统设置 - 销售业务行为配置表
    * k12_setting_touch_level		系统设置 - 沟通等级与业务行为关系配置表
    * k12_stat_consumer		统计 - 客户
    * k12_teacher_leave 		老师请假--老师端 个人中心
    * k12_teacher_leave_item		报名管理 - 老师课时安排表



#### 2018-05-28 周一
* 省市区js数据更新
* 数据层封装

#### 2018-05-29 周二
* 营销工具需求分析
    * 优惠卷
        * 优惠卷是否是原系统中代金卷功能
        * 优惠卷是否接入微信卡卷
        * 优惠卷核销
        * 领取规则
        * 优惠种类
        * 发放数量
    * 课程报名
        * 所需组件
        * 人数上限
    * 活动报名
        * 所需组件
        * 人数上限
    * 组件明细列表

    
#### 2018-05-30 周三
* k12 引入qrcode 类库
* React

#### 2018-05-31 周四
* 创建yaf example
* 试用爱校saas http://i.xiaohe.com

#### 2018-06-01 周五
* 营销管理表创建
* 营销管理controller和model创建
* 

#### 2018-06-04 周一
* 修改营销管理已创建model，使用PDO参数绑定和sql预发送方式防止SQL注入
* layuiAdmin 

#### 2018-06-05 周二
* Eloquent ORM
* 营销管理-微页面架构初版
* Ubuntu Mysql5.7

#### 2018-06-06 周三
* 营销管理

#### 2018-06-07 周四
* 营销管理
    * 模板
* 正则表达式

#### 2018-06-08 周五
* 营销管理
* 
#### 2018-06-11 周一
* 营销管理
#### 2018-06-12 周二
* 营销管理
#### 2018-06-13 周三
* 营销管理
#### 2018-06-14 周四
* 营销管理
#### 2018-06-15 周五
* 营销管理
#### 2018-06-19 周一
* 营销管理
#### 2018-06-20 周二
* 营销管理
#### 2018-06-22 周三
* 营销管理
#### 2018-06-23 周四
* 营销管理
#### 2018-06-24 周五
* 营销管理
#### 2018-06-26 周一
* 营销管理
#### 2018-06-27 周二
* 营销管理-修改样式保持和之前样式一致 
* 营销管理-发布过的模板过期后自动下架
* 营销管理-模板显示提示过期
#### 2018-06-28 周三
#### 2018-06-29 周四
#### 2018-06-30 周五 