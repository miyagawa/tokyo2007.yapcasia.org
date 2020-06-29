#!/usr/local/bin/perl -w
use strict;
BEGIN {
    my $fh;
    for (qw(kwiki.env .ht-kwiki.env)) { open $fh, $_ and last }
    do { $ENV{$1} = $2 if /^(\w+)\s*=\s*['"]?(.*?)['"]?\s*$/ } for <$fh>;
}
use lib grep { -e } split /:/, $ENV{KWIKI_LIB_PATH} || 'lib';
use Kwiki::Boot;
use CGI::Fast;

while ( my $cgi = CGI::Fast->new ) {
    Kwiki::Boot->debug->boot->kwiki->process;
}
