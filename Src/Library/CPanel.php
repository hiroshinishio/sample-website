        $response = $this->getRequest("json-api", "cpanel", $parameters);
        $stats = $response->cpanelresult->data;
        if (empty($stats) || !isset($stats[0])) {
            return array(
                "error" => "File not found or unable to get stats for file: " . $fullPath
            );
        }
        $ctime = date("H:i:s d/m/Y", $stats[0]->ctime);
        $mtime = date("H:i:s d/m/Y", $stats[0]->mtime);
        return array(
            "fullPath" => $fullPath,
            "dirname" => $pathInfo["dirname"],
            "basename" => $pathInfo["basename"],
            "size" => $stats[0]->size,
            "ctime" => $ctime,
            "mtime" => $mtime,
            "type" => $stats[0]->type,
            "humansize" => $stats[0]->humansize
        );