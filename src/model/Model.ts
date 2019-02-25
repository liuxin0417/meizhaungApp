import { TimerDownService } from "../providers/TimerDownService";

export class Parameter {
    jyh: string;
    parm: string;
    sign: string;
    ts: string;
}

export class GoodsInfo {
    name: string;
    currentPrice: string;
    originPrice: string;
}

export class SupplyInfo {
    supplyName: string;   //发布人昵称
    integrity: string;    //诚信度
    supplyTime: string;   //发布时间
    supplyPrice: string;  //价格
    supplyContent: string; //详细介绍
}

export class RequirementInfo {
    requirePerson: string;   //发布人昵称
    integrity: string;       //诚信度
    requirePrice: string;    //价格
    requireTime: string;     //发布需求时间
    deadline: string;        //截止时间
    requireContent: string;  //详细介绍
    distance: string;        //距离
}

export class GeneralCategory {//商品分类
    name: string;
    subCategory: any;
}

//充值页面
export class PayAndDetail {
    showPrice: string;  //优惠前的价格
    payPrice: string;   //实际支付的价格    
}

//举报信息
export class ReportInfo {
    reportTime: string;  //举报的时间
    reportPerson: string;  //举报的人
    reportReason: string;   //举报的原因    
}

export class UserInfo {
    ID: string;
    LoginName: string;
    Phone: string;
    Profits: number;
    ActiveMoney: number;
    ToatalMoney: number;
    IsSm: number;
    SonNum:number;
}
export class Padding {
    ipageStart = 0;//开始页
    pageSize = 10;//分页
    nowpageIndex = 1;//当前页
}

export class ProductAttr {
    ProductName: string;
    ProductImage: string;
    ProductPrice: number;
    AttrList: any;
    ProductID: any;
}

export class AttrValue {
    Name: string;
    Value: string;
    title: string;
    RelName: string;
}

export class Order {
    ID: string;
    OrderBH: string;
    GuidID: string;
    ShopOrderBH: string;
    Items: any;
    groupId: string;
    OnlineState: number;
}

export class GoodsMessage {
    GroupID: string;
    UserID: string;
    Data: any;
}

export class OrderMessage {
    ID: string;
    Name: string;
    ShopOrderBH: string;
    OrderTotal: number;
    Items: any;
}

export class GroupList {
    State: number;
    LoginName: string;
    WaitNum: number;
    SponserTime: Date;
    EndTime: Date;
    HeadUrl: string;
    CouponID: string;
    timer = new TimerDownService();
}
