###mongodb

brew install mongodb

添加环境变量 

export PATH=/usr/local/Cellar/mongodb/3.4.4/bin:$PATH
source ~/.bash_profile


进入到mongodb的安装目录[创建属于root用户的目录,创建位置属于根目录]
sudo mkdir -p /data/db 


进入/usr/local/Cellar/mongodb/3.4.4目录，打开homebrew.mxcl.mongodb.plist文件，查看mongod.conf,打开并将storage的dbPath路径更改为/data/db
storage:
  dbPath: /data/db
  
  或者在其它目录创建只要对应的目录能匹配上即可

###启动mongodb数据库服务
sudo mongod


运行命令【可以在命令行，对数据库进行新建删除，对数据库中的表进行增删改查】,新开一个命令行

mongo

可以对数据库进行查看，对表进行数据查看



###安装mysql数据库
brew install mysql

####启动mysql服务
mysql.server start

###对mysql进行配置，并且设置root的密码
mysql_secure_installation


####停止mysql服务
mysql.server stop



###mysql命令

mysql是可以对本地的数据库进行配置，设置root用户密码，添加用户，设置访问权限
创建数据库，分配用户