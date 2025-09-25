import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Search, 
  Filter,
  Eye,
  Download,
  Calendar,
  User,
  Tag
} from "lucide-react";

interface FacultyApprovalProps {
  isMobile?: boolean;
}

export function FacultyApproval({ isMobile = false }: FacultyApprovalProps) {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const submissions = [
    {
      id: 1,
      studentName: "Alex Johnson",
      studentId: "STU2024001",
      activity: "AWS Cloud Practitioner Certification",
      category: "Certification",
      submissionDate: "2024-01-15",
      status: "pending",
      priority: "high",
      avatar: "/placeholder-avatar-1.jpg"
    },
    {
      id: 2,
      studentName: "Sarah Chen",
      studentId: "STU2024002",
      activity: "Machine Learning Workshop",
      category: "Workshop/Seminar",
      submissionDate: "2024-01-14",
      status: "pending",
      priority: "medium",
      avatar: "/placeholder-avatar-2.jpg"
    },
    {
      id: 3,
      studentName: "Mike Davis",
      studentId: "STU2024003",
      activity: "Hackathon Winner - 1st Place",
      category: "Competition",
      submissionDate: "2024-01-13",
      status: "approved",
      priority: "high",
      avatar: "/placeholder-avatar-3.jpg"
    },
    {
      id: 4,
      studentName: "Emma Wilson",
      studentId: "STU2024004",
      activity: "Community Teaching Volunteer",
      category: "Volunteer Work",
      submissionDate: "2024-01-12",
      status: "pending",
      priority: "low",
      avatar: "/placeholder-avatar-4.jpg"
    },
    {
      id: 5,
      studentName: "James Brown",
      studentId: "STU2024005",
      activity: "React Development Course",
      category: "Certification",
      submissionDate: "2024-01-11",
      status: "rejected",
      priority: "medium",
      avatar: "/placeholder-avatar-5.jpg"
    }
  ];

  const categories = [
    "Academic Achievement",
    "Certification",
    "Workshop/Seminar",
    "Competition",
    "Volunteer Work",
    "Internship",
    "Project",
    "Leadership",
    "Sports/Cultural"
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-accent" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Clock className="h-4 w-4 text-secondary" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-accent text-accent-foreground';
      case 'rejected':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const filteredSubmissions = submissions.filter(submission => {
    const matchesStatus = selectedStatus === "all" || submission.status === selectedStatus;
    const matchesCategory = selectedCategory === "all" || submission.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      submission.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.activity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStatus && matchesCategory && matchesSearch;
  });

  const handleApprove = (id: number) => {
    console.log(`Approved submission ${id}`);
  };

  const handleReject = (id: number) => {
    console.log(`Rejected submission ${id}`);
  };

  const stats = {
    total: submissions.length,
    pending: submissions.filter(s => s.status === 'pending').length,
    approved: submissions.filter(s => s.status === 'approved').length,
    rejected: submissions.filter(s => s.status === 'rejected').length
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold mb-2">Faculty Approval Panel</h1>
        <p className="text-muted-foreground">
          Review and approve student activity submissions
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold">{stats.total}</div>
            <div className="text-sm text-muted-foreground">Total Submissions</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-secondary">{stats.pending}</div>
            <div className="text-sm text-muted-foreground">Pending Review</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-accent">{stats.approved}</div>
            <div className="text-sm text-muted-foreground">Approved</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-destructive">{stats.rejected}</div>
            <div className="text-sm text-muted-foreground">Rejected</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by student name, activity, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full md:w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Submissions Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Student Submissions ({filteredSubmissions.length})</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Activity</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubmissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={submission.avatar} alt={submission.studentName} />
                          <AvatarFallback>
                            {submission.studentName.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{submission.studentName}</div>
                          <div className="text-sm text-muted-foreground">{submission.studentId}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-48">
                        <div className="font-medium truncate">{submission.activity}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {submission.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm">{submission.submissionDate}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`text-xs ${getPriorityColor(submission.priority)}`}>
                        {submission.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(submission.status)}
                        <Badge className={`text-xs ${getStatusColor(submission.status)}`}>
                          {submission.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        {submission.status === 'pending' && (
                          <>
                            <Button 
                              size="sm" 
                              className="bg-accent text-accent-foreground hover:bg-accent/90"
                              onClick={() => handleApprove(submission.id)}
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleReject(submission.id)}
                            >
                              <XCircle className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}