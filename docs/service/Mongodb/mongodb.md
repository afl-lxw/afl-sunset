# Mongodb

## 第一章 前言

### 1.1 知识体系分析

+ 前端工程师:Web前端，也就是在Web应用中用户可以看得见碰得着的东西。包括Web页面的结构、Web的外观视觉表现以及Web层面的交互实现。

+ 后端工程师:与数据库进行交互以处理相应的业务逻辑,提供数据供前端显示。需要考虑的是如何实现功能、数据的存取、平台的稳定性与性能等。

### 1.2 mongodb概述

mongodb 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。
mongodb 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。

+ 关系型数据库(sql):数据以表格形式存储,通过表格的行列关系进行检索，每一行的内容,必是符合表结构的,就是说--列的个数,类型都一样.
+ 文档型数据库(no-sql not-only-sql):数据以文档类型进行存储,数据之间没有严格的映射关系.

mongodb是一种文档形数据库,数据以key/value形式存储，内部执行引擎为JS解释器, 把文档存储成bson结构,通过gridefs系统存储文件，在查询时,转换为js对象,并可以通过熟悉的js语法来操作.

## 第二章 Mongodb在windows下的安装

### 2.1 mongodb的安装

+ 下载最新stable版的mongodb `www.mongodb.org`;
+ 不需要编译,一路next安装

### 2.2 目录结构

+ bsondump:    binary-json,二进制文件,选择性导出bson文件
+ mongo:       客户端
+ mongod:      服务端
+ mongodump:   整体导出数据库（二进制）
+ mongoexport：导出易识别的json文档
+ mongoimport：导入json文档
+ mongorestore：数据库整体导入
+ mongos：      路由器（分片）

### 2.3 启动mongod服务

`./bin/mongod.exe --dbpath /path/to/database --logpath /path/to/log-file --port 27017`

参数解释:

+ dbpath 数据存储目录
+ logpath 日志存储文件
+ port 运行端口(默认27017)

打开`localhost:27017`页面,可以看到以下信息:

```
It looks like you are trying to access MongoDB over HTTP on the native driver port.
```

证明服务器启动成功.

然后另外开启一个命令窗口,执行`mongo.exe`,进入mongodb客户端.

### 2.4 基本概念解释

|MongoDB术语/概念|解释/说明|
|-----|-----|
|database|    数据库|
|collection| 数据库表/集合|
|document  |  数据记录行/文档|
|field |  数据字段/域|
|index  | 索引|
|primary key |主键,MongoDB自动将_id字段设置为主键|

## 第三章 Mongodb入门命令

### 3.1 基本查看命令

+ show dbs  查看当前的数据库
+ use databaseName 选库
+ show tables/collections 查看当前库下的collection

### 3.2 库和collection的操作

+ db
查看当前所处的数据库

+ 在mongodb中,库是隐式创建,
你可以use 一个不存在的库, 然后在该库下创建collection,即可创建库

+ db.dropDatabase();
删除database

+ db.createCollection(‘collectionName’)  
创建collection

+ collection也是允许隐式创建的
db.collectionName.insert(document);
在集合(表)中插入具体数据的时候会自动创建

+ db.collectionName.drop() ,
删除collection

## 第四章 Mongodb基本增删改查操作

### 4.1 增加数据

mongodb存储的是文档,文档是json格式的对象,我们向数据库存储数据的时候可以使用insert方法,数据格式要以js对象格式进行存储:
语法:`db.collectionName.insert(document)`;

我们可以以多种方法对文档进行存储:

#### 4.1.2 增加单篇文档

```
db.collectionName.insert({title:"nice day"});
```

#### 4.1.3 增加单个文档,并且指定_id

`_id`是我们在插入数据的时候,mongodb自动给文档添加的一个属性,如果我们不需要系统分配`_id`,可以在添加数据的时候手动设置,覆盖原有`_id`,虽然`_id`的类型可以自由指定,但是在同一个集合当中必须唯一,如果插入重复的值,系统会抛出异常.

>这个`_id`的名称是固定的,它可以是Mongodb支持的任何数据类型,默认是ObjectId,在关系型数据库中,主键通常是数值型的,并且可以设置自增,反观Mongodb的主键,原生不支持自增主键.

```
db.collectionName.insert({_id:8,age:78,name:"lisi"});
```

```
> db.stu.insert({_id:3,age:17})
WriteResult({ "nInserted" : 1 })
> db.stu.insert({_id:3,age:14})
WriteResult({
        "nInserted" : 0,
        "writeError" : {
                "code" : 11000,
                "errmsg" : "E11000 duplicate key error collection: web.students index: _id_ dup key: { : 3.0 }"
        }
})
```

#### 4.1.4 增加多个文档

```
db.collectionName.insert(
    [
        {time:'friday',study:'mongodb'},
        {_id:9,gender:'male',name:'QQ'}
    ]
 )
```

可以以数组的方式,一次性向集合插入多个数据;

同时应该注意的是,由于mongodb采用的是`JavaScript Shell`,所以我们可以根据js特性,将文档作为值赋给变量然后进行操作:

```
j = {name : "mongo"};
t = {x:3};
db.stu.insert([j,t]);
```

#### 4.1.5 save和insert的区别

save和insert都可以进行数据的插入和增加,但是也有一些异同:

对于已存在数据`{_id:1, "name":"n1"}`，再次进行插入操作时，`insert({_id : 1, "name" :"n2"})`会报主键重复的错误提示`save({ _id:1, " name ":"n2"})`会把n1修改为n2。

相同点：
若新增的数据中没有主键时，会增加一条记录。

### 4.2 查询操作

#### 4.2.1 find()

无条件的普通查询方式很简单,可以直接使用
`db.collectionName.find();`一次可以查出指定集合中的所有数据

```
for(var i = 1;1<10;i++) db.stu.save({x:4,y:3});
db.stu.find();
```
>如果出现显示不全的现象,可以使用"it"命令,继续显示下面的数据.

当然,我们还可以按照条件进行查询操作

语法: `db.collection.find(查询表达式,查询的列);`

例1: `db.stu.find({},{gendre:1})`
查询所有文档,的gender属性 (_id属性默认总是查出来)

例2: `db.stu.find({},{gender:1, _id:0})`
查询所有文档的gender属性,且不查询_id属性
>此处的0表示的是false,不查询

例3: `db.stu.find({gender:’male’},{name:1,_id:0});`
查询所有gender属性值为male的文档中的name属性

#### 4.2.2 findOne()

findOne()和find()函数一样,只是findOne()返回的是查询结果中的第一条数据,或者返回null.

`db.stu.findOne(查询表达式,查询的列)`

### 4.3 删除操作

语法: `db.collectionName.remove(查询表达式, 选项);`

选项是指 `{justOne:true/false}`,是否只删一行, 默认为false

注意

+ 1: 查询表达式依然是个json对象
+ 2: 查询表达式匹配的行,将被删掉.
+ 3: 如果查询表达式为空对象{},collections中的所有文档将被删掉.

例1: `db.stu.remove({sn:'001'})`;

删除stu表中sn属性值为'001'的文档 

例2: `db.stu.remove({gender:'m'},true)`;

删除stu表中gender属性为m的文档,只删除1行.

### 4.4 修改操作

语法: `db.collection.update(查询表达式,新值,选项);`

    * 改哪几行? --- 查询表达式
    * 改成什么样? -- 新值 或 赋值表达式
    * 操作选项 ----- 可选参数
            upsert:如果要更新的那条记录没有找到，是否插入一条新纪录，默认为false
            multi :是否更新满足条件的多条的记录,默认为false 

multi :是否更新满足条件的多条的记录，false：只更新第一条，true:更新多条，默认为false 

例:`db.news.update({name:'QQ'},{name:'MSN'})`;

是指选中news表中,name值为QQ的文档,并把其文档值改为{name:"MSN"},

结果: 文档中的其他列也不见了,改后只有_id和name列了.即是新文档直接覆盖了旧文档,而不是修改.

### 4.4.1 修改操作中的关键字

如果是想修改文档的某列,可以用`$set`关键字

`db.collectionName.update(query,{$set:{name:’QQ’}})`

修改时的赋值表达式

+ $set  修改某列的值
+ $unset 删除某个列
+ $inc 增长某个列
+ $rename 重新命名某列
+ $setOnInsert 当upsert为true时,并且发生了insert操作时,可以补充的字段.

##### $inc实例

按照指定的步长增长某个列;

```
> db.stu.insert({"uid":"201203","type":"1",size:10})
> db.stu.find()
{ "_id" : ObjectId("5003b6135af21ff428dafbe6"), "uid" : "201203", "type" : "1",
"size" : 10 }
> db.stu.update({"uid" : "201203"},{"$inc":{"size" : 2}})
> db.stu.find()
{ "_id" : ObjectId("5003b6135af21ff428dafbe6"), "uid" : "201203", "type" : "1",
"size" : 12 }
```

##### $unset实例

```
>db.stu.find({_id:3})
{"_id" : 3 , "age" : 18}
> db.stu.update({_id:3},{$unset:{age:'sss'}})
WriteResult({ "nMatched" : 0, "nUpserted" : 0, "nModified" : 0 })
> db.stu.update({_id:3},{$unset:{age:'sss'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.stu.find({_id:3})
{ "_id" : 3 }
```

##### $rename实例
```
->db.stu.insert({name:'lisi',age:12,sex:'male',height:123,area:'haidian'});
->db.stu.update({name:'lisi'},{$set:{area:'chaoyang'},$unset:{height:1},$inc:{age:1},$rename:{sex:'gender'}});

```


### 4.4.2 Option选项的作用:

`{upsert:true/false,multi:true/false}`

+ upsert:是指没有匹配的行,则直接插入该行

例:`db.stu.update({name:'wuyong'},{$set:{name:'junshiwuyong'}},{upsert:true});`
如果有`name='wuyong'`的文档,将被修改,如果没有,将添加此新文档

例:`db.news.update({_id:99},{x:123,y:234},{upsert:true});`
没有_id=99的文档被修改,因此直接插入该文档

+ multi: 是指修改多行(即使查询表达式命中多行,默认也只改1行,如果想改多行,可以用此选项)

例:`db.news.update({age:21},{$set:{age:22}},{multi:true});`
则把news中所有age=21的文档,都修改

### 4.5 查询表达式

我们无论在修改删除还是查询的过程中,都需要传入查询表达式对目标数据进行查询,表达式有很多种

```
1: 最简单的查询表达式
{filed:value} ,是指查询field列的值为value的文档

2: $ne：!=
{field:{$ne:value}}
db.stu.find({age:{$ne:16}})
作用--查age列的值 不等于16的文档

3:$gt:大于
  $lt:小于
  $gte:大于或等于
  $lte:小于或等于

4: $in：[]
查询某列的值在范围内的文档
db.goods.find({cat_id:{$in:[2,8]}}

5: $nin：not in
查询某列不在范围内的文档
$nin:[2,3,5]

6: $exists 
语法: {field:{$exists:1}}
作用: 查询出含有field字段的文档

7:用正则表达式查询 以”诺基亚”开头的商品
例:db.goods.find({goods_name:/诺基亚.*/},{goods_name:1});
```

## 第五章 游标操作

通俗的说,游标不是查询结果,而是查询的返回资源,或者接口，通过这个接口,你可以逐条对数据进行读取；

声明游标:

```
var cursor = db.collectioName.find(query,projection);
cursor.hasNext() //判断游标是否已经取到尽头
cursor.next() //取出游标的下1个单元
```

用while来循环游标

```
> var mycursor = db.bar.find({_id:{$lte:5}})
> while(mycursor.hasNext()) {
    printjson(mycursor.next());
}
```

游标还有一个迭代函数,允许我们自定义回调函数来逐个处理每个单元.

`cursor.forEach(回调函数);`

```
> var gettitle = function(obj) {print(obj.goods_name)}
> var cursor = db.goods.find();
> cursor.forEach(gettitle);
```

**游标在分页中的应用**

比如查到10000行,跳过100页,取10行,一般地,我们假设每页N行, 当前是page页,就需要跳过前 (page-1)*N 行, 再取N行.

在mongo中,分页是用skip(), limit()函数来实现的

```
//查询结果中,跳过前9995行
var mycursor = db.bar.find().skip(9995);

//查询第901页,每页10条
则是 var mytcursor = db.bar.find().skip(9000).limit(10);
```

## 第六章 MongoDB在Node环境中使用

我们如果想要将mongodb用于实际的开发中于nodejs作为交互,需要下载node下的mongodb服务器模块.

在项目根目录下运行

```
npm install mongodb --save 
```

安装完毕后启动mongodb的服务端mongod.exe,我们就可以通过js代码的形式链接mongodb数据库了

### 6.1 快速开始

官方API地址:`http://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/`

```
var myClient = require('mongodb').MongoClient;
var server = 'mongodb://localhost:27017/web';//连接web集合
myClient.connect(server,function(err,db){//连接数据库
    if(!err){
        console.log(db);
        db.close();       //关闭数据库
    }
})
```

### 6.2 增加数据

插入数据有insertOne和insertMany两种方法

```
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/web';
MongoClient.connect(url, function(err, db) {
  db.collection('inserts').insertOne({a:1}, function(err, res) {
    //insertOne插入一条数据
      console.log(res.insertedCount);
    //返回值对象里的insertedCount表示插入数量
    });
    db.collection('inserts').insertMany([{a:2},{a:3}], function(err, res) {
    //insertOne插入多条数据
      console.log(res.insertedCount);
      db.close();
    });
});
```

### 6.3 查询数据

查询所有的文档数据

```
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/web';
MongoClient.connect(url, function(err, db) {
    db.collection('inserts').find({}).toArray(function(err,docs){
            if(!err){
                console.log(docs);
            }
            db.close();
        });
});
```

当然,我们可以使用条件查询数据

```
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/web';
MongoClient.connect(url, function(err, db) {
    db.collection('inserts').find({a:{$ne:2}}).toArray(function(err, docs) {
        if (!err) {
            console.log(docs);
        }
        db.close();
    });
});
```

查询数据的过程中，我们同样可以使用`skip()`,`limit()`等方法

```
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/web';
MongoClient.connect(url, function(err, db) {
    db.collection('inserts').find({a:{$ne:2}}).skip(4).limit(2).toArray(function(err, docs) {
        if (!err) {
            console.log(docs);
        }
        db.close();
    });
});
```

**查询过程中的连续操作**

在查询的过程中，给我们提供了三个连续操作的API `findOneAndUpdate`, `findOneAndDelete`,  `findOneAndReplace`,使用起来也非常方便

```
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/web';
MongoClient.connect(url, function(err, db) {
    db.collection('inserts').findOneAndUpdate({a:1},{$set:{b:3}},function(err,res){
      console.log(res);
    });
    db.close();
});
```

```
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/web';
MongoClient.connect(url, function(err, db) {
    db.collection('inserts').findOneAndDelete({b:3},function(err,res){
      console.log(res);
    });
    db.close();
});
```

### 6.4 删除操作

我们可以使用deleteOne和deleteMany方法删除collection中的数据

```
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/web';
MongoClient.connect(url, function(err, db) {
    db.collection('inserts').deleteOne({a:1},function(err,res){
      console.log(res.deletedCount);
    });
    db.close();
});
```

```
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/web';
MongoClient.connect(url, function(err, db) {
    db.collection('inserts').deleteMany({a:2},function(err,res){
      console.log(res.deletedCount);
    });
    db.close();
});
```

### 6.5 修改操作

同样,update操作也可以使用updateOne和updateMany两种方法,在修改的同时也可以使用查询表达式.

```
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/web';
MongoClient.connect(url, function(err, db) {
    db.collection('inserts').updateOne({a:1},{$set:{b:2}},function(err,res){
      console.log(res.modifiedCount);
    });
    db.close();
});
```

>`{upsert: true}`帮助我们在修改不存在的数据时插入一条新数据`

### 注意

如果按照"_id"进行查询或者修改的话,直接填入`_id`的值是不能获取结果的,因为mongodb的`_id`默认值是ObjectId类型的

```
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/web';
MongoClient.connect(url, function(err, db) {
    db.collection('inserts').find({_id:"58b04104ae7db136d00ebb66"}).toArray(function(err, docs) {
        if (!err) {
            console.log(docs);
        }
        db.close();
    });
});
```

会发现方法正确但是没有返回值；如果我们想要按照主键查找，需要引入Object模块：

```
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var url = 'mongodb://localhost:27017/web';
MongoClient.connect(url, function(err, db) {
    db.collection('inserts').find({_id:ObjectId("58b04104ae7db136d00ebb66")}).toArray(function(err, docs) {
        if (!err) {
            console.log(docs);
        }
        db.close();
    });
});
```
