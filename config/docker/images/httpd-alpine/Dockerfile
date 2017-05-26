FROM httpd:2.4-alpine

RUN sed -i '/LoadModule proxy_module/s/^#//g' /usr/local/apache2/conf/httpd.conf
RUN sed -i '/LoadModule proxy_fcgi_module/s/^#//g' /usr/local/apache2/conf/httpd.conf
RUN sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf

#RUN { \
#  echo 'Include conf.d/*.conf'; \
#} >> /usr/local/apache2/conf/httpd.conf \
#  && mkdir /usr/local/apache2/conf.d

  #credits to https://hub.docker.com/r/ja2015/httpd-alpine/
