#!/usr/bin/perl
use strict;
use warnings;
use CGI;
use Template;

my $q = CGI->new;
$q->charset("utf-8");

my $tt = Template->new({ COMPILE_EXT => '.ttc', COMPILE_DIR => '/vh/tokyo2007.yapcasia.org/vars' });
my $lang = $q->param('lang') || ( $ENV{HTTP_ACCEPT_LANGUAGE} =~ /^ja/i ? 'ja' : 'en' );

print $q->header('text/html');
$tt->process("index.tt", { lang => $lang });






